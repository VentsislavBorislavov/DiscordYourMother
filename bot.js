import botHelper from "discord-bot-helper";
import { Intents } from "discord.js";
import { Player } from "discord-music-player";

const bot = botHelper("-", [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_VOICE_STATES,
]);

const musicPlayer = new Player(bot.client, { leaveOnEmpty: false });

export { bot, musicPlayer };
