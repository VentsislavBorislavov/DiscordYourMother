const { Client, Intents } = require("discord.js");
const { randomChoice } = require("./src/randomChoice");
const { mapiQuotes } = require("./src/disstrack");
const { emojis } = require("./src/emojilist");
const { shouldReply } = require("./src/commands");
const { token } = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready boi!");
});

client.on("messageCreate", (message) => {
  if (shouldReply(message.content, ["кой", "koj", "кои", "koi"])) {
    message.reply(`Майка ти ${randomChoice(emojis)}`);
    return;
  }
  if (shouldReply(message.content, ["whose", "who", "whom"])) {
    message.reply(`Your mom ${randomChoice(emojis)}`);
    return;
  }
  if (
    !message.author.bot &&
    shouldReply(message.content, [
      "майка ти",
      "majka ti",
      "maikati",
      "mainata ti",
      "maika ti",
      "maikati",
      "you're mom",
      "your mom",
      "yo mama",
      "yo mom",
      "ya mam",
      "ya mama",
    ])
  ) {
    message.reply(randomChoice(randomChoice([mapiQuotes])));
  }
});

client.login(token);
