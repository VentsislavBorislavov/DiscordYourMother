import { replyPhrases } from "./phrases";

export function shouldReply(content: string) {
  for (const phrase of replyPhrases) {
    if (typeof phrase === "string" && content.includes(phrase)) {
      return true;
    } else if (phrase instanceof RegExp && phrase.test(content)) {
      return true;
    }
  }

  return false;
}
