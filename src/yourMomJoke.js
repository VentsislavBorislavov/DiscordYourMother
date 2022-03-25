import fetch from "node-fetch";

export const replyYourMomJoke = async (message) => {
  const res = await fetch("https://api.yomomma.info/");
  const { joke } = await res.json();
  message.reply(`Братле, ${joke}`);
};
