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

  const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = "Nie udało się zapisać do newslettera.";

    try {
      const data = await response.json();
      if (typeof data?.message === "string" && data.message.length > 0) {
        errorMessage = data.message;
      }
    } catch (error) {
      // Ignorujemy błąd parsowania – użyjemy domyślnego komunikatu
    }

    throw new NewsletterError(errorMessage);
  }
};
