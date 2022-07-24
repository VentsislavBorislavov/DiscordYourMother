import { Intents } from "discord.js";
import botHelper from "discord-bot-helper";

import dotenv from "dotenv";
import repliesCombiner from "./src/commands/replies/replies.combiner.js";
import reactionsCombiner from "./src/commands/reactions/reactions.combiner.js";

dotenv.config();

const bot = botHelper("!", [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_VOICE_STATES,
]);

bot.useCombiner(repliesCombiner);
bot.useCombiner(reactionsCombiner);

bot.ignoreBots();

bot.start(process.env.DISCORD_TOKEN, () => {
  console.log("Ready boi!");
});
