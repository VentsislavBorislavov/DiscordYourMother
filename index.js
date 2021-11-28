const { Client, Intents } = require("discord.js");
const { randomChoice } = require("./src/randomChoice");
const { mapiQuotes } = require("./src/disstrack");
const { emojis } = require("./src/emojilist");
const { shouldReply } = require("./src/commands");
const { token } = require("./config.json");
const { bgPhrase, egPhrase, momPhrase } = require("./src/phrases");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready boi!");
});

client.on("messageCreate", (message) => {
  if (shouldReply(message.content, bgPhrase)) {
    message.reply(`Майка ти ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(message.content, egPhrase)) {
    message.reply(`Your mom ${randomChoice(emojis)}`);
    return;
  }
  if (!message.author.bot && shouldReply(message.content, momPhrase)) {
    message.reply(randomChoice(randomChoice([mapiQuotes])));
  }
});

client.login(token);
