import {
  m,
  a,
  i,
  k,
  t,
  e,
  v,
  n,
  o,
  d,
  y,
  g,
  space,
  s,
} from "../constants/letters";

export const combine = (...regexes: RegExp[]) => {
  const regString = regexes.reduce((prev, curr) => prev + curr.source, "");
  return new RegExp(regString);
};

export const bgPhrase = [
  combine(k, o, i),
  combine(k, a, k, v, o),
  combine(k, v, o),
  combine(k, a, k),
];
export const egPhrase = ["whose", "who", "whom", "what"];
export const egWhere = [/where/];
export const bgWhere = combine(k, y, d, e);
export const eNe = ["e ne", "е не", "oh no", "не бе", "ne be", "nebe", "небе"];
export const momPhrase = [
  combine(m, a, i, k, a, space, t, i),
  combine(m, a, i, n, a, t, a, space, t, i),
  "you're mom",
  "your mom",
  "your mother",
  "you're mother",
  "yo mama",
  "yo mom",
  "ya mam",
  "ya mama",
];

const combinePhrases = (newWord: RegExp, arr: RegExp[]) =>
  arr.map(
    (phrase) => new RegExp(newWord.source + space.source + phrase.source),
  );

export const naPhrases = combinePhrases(combine(n, a), [
  ...bgPhrase,
  combine(k, o, g, o),
]);

export const sPhrases = combinePhrases(s, [...bgPhrase, combine(k, o, g, o)]);

export const replyPhrases = [
  ...sPhrases,
  ...naPhrases,
  bgWhere,
  ...egWhere,
  ...bgPhrase,
  ...egPhrase,
];
