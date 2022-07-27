import random from "random";

export const randomChoice = (args) => {
  const randomIdx = random.int(0, args.length - 1);
  return args[randomIdx];
};
