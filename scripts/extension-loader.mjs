import fs from "node:fs/promises";

export async function resolve(specifier, context, defaultResolve) {
  try {
    return await defaultResolve(specifier, context, defaultResolve);
  } catch (error) {
    if (
      error.code === "ERR_MODULE_NOT_FOUND" &&
      !specifier.endsWith(".js") &&
      !specifier.startsWith("node:")
    ) {
      const url = new URL(specifier, context.parentURL);
      const candidate = new URL(`${url.pathname}.js`, url);
      try {
        await fs.access(candidate);
        return { url: candidate.href }; 
      } catch {}
    }
    throw error;
  }
}
