const NEWSLETTER_WEBHOOK_URL = import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL;

export interface NewsletterSubscriptionPayload {
  email: string;
  metadata?: Record<string, unknown>;
}

export class NewsletterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NewsletterError";
  }
}

export const subscribeToNewsletter = async (
  payload: NewsletterSubscriptionPayload
): Promise<void> => {
  if (!NEWSLETTER_WEBHOOK_URL) {
    throw new NewsletterError(
      "Brakuje konfiguracji webhooka newslettera (VITE_NEWSLETTER_WEBHOOK_URL)."
    );
  }

  // Używamy URLSearchParams, bo endpoint /jsonp/ MailerLite tego oczekuje
  const formData = new URLSearchParams();
  formData.append("fields[email]", payload.email);

  try {
    const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new NewsletterError("Nie udało się zapisać do newslettera.");
    }

    // MailerLite zwraca JSON z odpowiedzią, możemy sprawdzić czy ma flagę success
    const data = await response.json().catch(() => null);
    if (data && data.success === false) {
      // Częsty przypadek: adres e-mail z czarnej listy lub błędny format
      throw new NewsletterError("Wystąpił problem z weryfikacją adresu e-mail.");
    }
  } catch (error) {
    if (error instanceof NewsletterError) {
      throw error;
    }
    // Błędy sieciowe (np. uBlock zablokował skrypt śledzący)
    throw new NewsletterError("Błąd sieci. Sprawdź połączenie lub wyłącz adblocka na czas zapisu.");
  }
};