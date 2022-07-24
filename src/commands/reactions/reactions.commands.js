import { mhmEmoji } from "../../services/emoji.js";

export function reactMhm(message) {
  message.react(mhmEmoji);
}
