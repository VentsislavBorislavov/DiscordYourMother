import { Client, Intents } from "discord.js";
import { randomChoice } from "./src/randomChoice.js";
import { mapiQuotes } from "./src/disstrack.js";
import { emojis } from "./src/emoji.js";
import { shouldReply } from "./src/commands.js";
import {
  bgPhrase,
  egPhrase,
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


  if (shouldReply(message.content, sPhrase)) {
    message.reply(`С майка ти ${randomChoice(emojis)}`);
    return;
  }

  if (shouldReply(message.content, naPhrases)) {
    message.reply(`На майка ти ${randomChoice(emojis)}`);
    return;
  }

  if (shouldReply(message.content, bgPhrase)) {
    message.reply(`Майка ти ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(message.content, egPhrase)) {
    message.reply(`Your mom ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(message.content, momPhrase)) {
    message.reply(randomChoice(randomChoice([mapiQuotes])));
  }
});
client.login(process.env.DISCORD_TOKEN);
