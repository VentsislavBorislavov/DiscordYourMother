import { bot } from "./bot.js";

import dotenv from "dotenv";
import repliesCombiner from "./src/commands/replies/replies.combiner.js";
import reactionsCombiner from "./src/commands/reactions/reactions.combiner.js";
import musicCombiner from "./src/commands/music/music.combiner.js";

dotenv.config();

bot.useCombiner(repliesCombiner);
bot.useCombiner(reactionsCombiner);
bot.useCombiner(musicCombiner);

bot.ignoreBots();

bot.start(process.env.DISCORD_TOKEN, () => {
  console.log("Ready boi!");
});
