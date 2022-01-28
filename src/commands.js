export function shouldReply(content, args) {
  const lowerContent = content.toLowerCase();
  if (typeof args === "string") {
    return lowerContent.includes(args);
  }

  // regex and arrs are objects but regex has source to use to check
  if (args.source) {
    return args.test(lowerContent);
  }

  for (const idx in args) {
    let phrase = args[idx];
    // phrase is either string or regex and we test this
    if (typeof phrase === "string") {
      if (lowerContent.includes(phrase)) {
        return true;
      }
    } else if (phrase.test?.(lowerContent)) {
      return true;
    }
  }

  return false;
}

export function shouldReplyExact(content, args) {
  if (typeof args === "string") {
    return content.toLowerCase() === args;
  }

  for (const idx in args) {
    if (content.toLowerCase() === args[idx]) return true;
  }

  return false;
}
