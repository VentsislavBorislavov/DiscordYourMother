export function shouldReply(content, args) {
  if (typeof args === "string") {
    return content.toLowerCase().includes(args);
  }

  for (const idx in args) {
    if (content.toLowerCase().includes(args[idx])) return true;
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
