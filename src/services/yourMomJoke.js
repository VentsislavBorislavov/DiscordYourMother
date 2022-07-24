import fetch from "node-fetch";

export const fetchYourMomJoke = async () => {
  const res = await fetch("https://api.yomomma.info/");
  const { joke } = await res.json();
  return joke;
};
