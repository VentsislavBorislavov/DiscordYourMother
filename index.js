import { Intents } from "discord.js";
import botHelper from "discord-bot-helper";
import { shouldReply, shouldReplyExact } from "./src/services/shouldReply.js";
import {
  bgPhrase,
  bgWhere,
  egPhrase,
  egWhere,
  eNe,
  momPhrase,
  naPhrases,
  sPhrases,
} from "./src/services/phrases.js";
import {
  replyJokeOrDiss,
  replyOnYourMotherBG,
  replyToYourMotherBG,
  replyToYourMotherEN,
  replyWithYourMomBG,
  replyYourMomBG,
  replyYourMomEN,
} from "./src/commands/yourMomReplys.commands.js";
import { reactMhm } from "./src/commands/messageReact.commands.js";

import dotenv from "dotenv";

dotenv.config();

const bot = botHelper("!", [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
]);

bot.addWordListener(
  (content) => shouldReply(content, sPhrases),
  replyWithYourMomBG
);
bot.addWordListener(
  (content) => shouldReply(content, naPhrases),
  replyOnYourMotherBG
);
bot.addWordListener(
  (content) => shouldReply(content, bgPhrase),
  replyYourMomBG
);
bot.addWordListener(
  (content) => shouldReply(content, egPhrase),
  replyYourMomEN
);
bot.addWordListener(
  (content) => shouldReply(content, momPhrase),
  replyJokeOrDiss
);
bot.addWordListener(
  (content) => shouldReply(content, egWhere),
  replyToYourMotherEN
);
bot.addWordListener(
  (content) => shouldReply(content, bgWhere),
  replyToYourMotherBG
);
bot.addWordListener((content) => shouldReplyExact(content, eNe), reactMhm);
bot.addWordListener((content) => shouldReplyExact(content, 'kek'), reactMhm);

bot.ignoreBots();

bot.start(process.env.DISCORD_TOKEN, () => {
  console.log("Ready boi!");
});
