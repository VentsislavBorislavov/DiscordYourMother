import { musicPlayer } from "../../bot.js";

export function getQueue(message) {
  return musicPlayer.getQueue(message.guild.id);
}
