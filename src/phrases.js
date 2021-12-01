export const bgPhrase = ["кой", "koj", "кои", "koi", "какво", "kakvo", 'кво', 'kvo'];
export const egPhrase = ["whose", "who", "whom", "what"];
export const momPhrase = [
  "майка ти",
  "majka ti",
  "maikati",
  "mainata ti",
  "maika ti",
  "maikati",
  "you're mom",
  "your mom",
  "your mother",
  "you're mother",
  "yo mama",
  "yo mom",
  "ya mam",
  "ya mama",
  "майната ти",
];

/**
 *
 * @param {*} object
 * @returns the new phrase array attached with word
 */
const combinedPhrase = ({ words, arr, wordStart }) =>
  arr.map((el) =>
    el[0] === wordStart ? words[0] + " " + el : words[1] + " " + el
  );

export const naPhrases = combinedPhrase({
  words: ["na", "на"],
  arr: [...bgPhrase, "кого", "kogo"],
  wordStart: "k",
});

export const sPhrase = combinedPhrase({
  words: ["s", "с"],
  arr: [...bgPhrase, "кого", "kogo"],
  wordStart: "k",
})
