import { Client, Intents } from "discord.js";
import { randomChoice } from "./src/randomChoice.js";
import { mapiQuotes } from "./src/disstrack.js";
import { emojis } from "./src/emoji.js";
import { shouldReply, shouldReplyExact } from "./src/commands.js";
import {
  bgPhrase,
  bgWhere,
  egPhrase,
  egWhere,
  eNe,
  momPhrase,
  naPhrases,
  sPhrase,
} from "./src/phrases.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready boi!");
  client.user.setActivity("with your mother", { type: "PLAYING" });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content;

  if (shouldReply(content, sPhrase)) {
    message.reply(`С майка ти ${randomChoice(emojis)}`);
    return;
  }

  if (shouldReply(content, naPhrases)) {
    message.reply(`На майка ти ${randomChoice(emojis)}`);
    return;
  }

  if (shouldReply(content, bgPhrase)) {
    message.reply(`Майка ти ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(content, egPhrase)) {
    message.reply(`Your mom ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(content, momPhrase)) {
    message.reply(randomChoice(randomChoice([mapiQuotes])));
    return;
  }
  if (shouldReply(content, egWhere)) {
    message.reply(`To your mother ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(content, bgWhere)) {
    message.reply(`При майка ти ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReplyExact(content, eNe)) {
    message.react("<:mhm:912035396827881582>");
    return;
  }
});
client.login(process.env.DISCORD_TOKEN);
