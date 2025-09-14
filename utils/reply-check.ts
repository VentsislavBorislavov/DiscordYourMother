export function shouldReply(content: string, phrases: Array<string | RegExp>) {
  for (const phrase of phrases) {
    if (typeof phrase === "string" && content.includes(phrase)) {
      return true;
    } else if (phrase instanceof RegExp && phrase.test(content)) {
      return true;
    }
  }

  return false;
}
