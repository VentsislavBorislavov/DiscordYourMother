export function getRandom(num: number) {
  return Math.floor(Math.random() * num) + 1;
}

export function pickRandom<T>(arr: T[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
