export const n = /(n|н)/;
export const a = /(a|а)/;
export const k = /(k|к)/;
export const o = /(o|о)/;
export const i = /(i|j|и|й)/;
export const v = /(v|w|в|ф|f)/;
export const e = /(e|е)/;
export const m = /(m|м)/;
export const t = /(t|т)/;
export const y = /(u|y|a|а|ъ)/;
export const d = /(d|д)/;
export const g = /(g|г)/;
export const s = /(s|с|c)/;
export const space = /\s/;

export const combine = (...regexes) => {
  const regString = regexes.reduce((prev, curr) => prev + curr.source, "");
  return new RegExp(regString);
};
