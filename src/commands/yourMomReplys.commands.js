import { randomChoice } from "../services/randomChoice.js";
import { emojis } from "../services/emoji.js";
import disstrack from "../../assets/disstrack.js";
import { JOKE } from "../services/Constants.js";
import { replyYourMomJoke } from "../services/yourMomJoke.js";

export function replyWithYourMomBG(message) {
  message.reply(`С майка ти ${randomChoice(emojis)}`);
}

export function replyOnYourMotherBG(message) {
  message.reply(`С майка ти ${randomChoice(emojis)}`);
}

export function replyYourMomBG(message) {
  message.reply(`Майка ти ${randomChoice(emojis)}`);
}

export function replyYourMomEN(message) {
  message.reply(`Your mom ${randomChoice(emojis)}`);
}

export async function replyJokeOrDiss(message) {
  const quoteOrJoke = randomChoice([disstrack, JOKE, JOKE]);
  if (quoteOrJoke === JOKE) {
    const momJoke = await replyYourMomJoke(); // TODO rename this func
    return message.reply(`Братле, ${momJoke}`);
  }

  message.reply(randomChoice(quoteOrJoke));
}

export function replyToYourMotherEN(message) {
  message.reply(`To your mother ${randomChoice(emojis)}`);
}

export function replyToYourMotherBG(message) {
  message.reply(`При майка ти ${randomChoice(emojis)}`);
}
