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
  sPhrases,
} from "./src/phrases.js";
import { replyYourMomJoke } from "./src/yourMomJoke.js";

import dotenv from "dotenv";

dotenv.config();

const JOKE = "joke";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready boi!");
  client.user.setActivity(process.env.ACTIVITY_CONTENT, {
    type: process.env.ACTIVITY_TYPE,
  });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content;
  if (shouldReply(content, sPhrases)) {
    message.reply(
      `С моята майка ${randomChoice(["<:MuscleToni:959346900295888986>"])}`
    );
    return;
  }

  if (shouldReply(content, naPhrases)) {
    message.reply(
      `На моята майка ${randomChoice(["<:MuscleToni:959346900295888986>"])}`
    );
    return;
  }

  if (shouldReply(content, bgPhrase)) {
    message.reply(
      `Моята майка ${randomChoice(["<:MuscleToni:959346900295888986>"])}`
    );
    return;
  }
  if (shouldReply(content, egPhrase)) {
    message.reply(
      `My mom ${randomChoice(["<:MuscleToni:959346900295888986>"])}`
    );
    return;
  }
  if (shouldReply(content, momPhrase)) {
    const quoteOrJoke = randomChoice([mapiQuotes, JOKE, JOKE, JOKE]);
    if (quoteOrJoke === JOKE) {
      replyYourMomJoke(message);
      return;
    }
    message.reply(randomChoice(quoteOrJoke));
    return;
  }
  if (shouldReply(content, egWhere)) {
    message.reply(`To my mother ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(content, bgWhere)) {
    message.reply(`При моята майка ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReplyExact(content, eNe)) {
    message.react("<:MuscleToni:959346900295888986>");
    return;
  }
});
client.login(process.env.DISCORD_TOKEN);
