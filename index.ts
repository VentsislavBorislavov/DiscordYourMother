import { Client, GatewayIntentBits } from "discord.js";
import { getMessage } from "./ai/diss";
import { getRandom1to4 } from "./ai/changes";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log("We are ready to diss!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  let shouldReply = false;

  if (message.reference && message.reference.messageId) {
    const repliedToId = message.reference.messageId;

    // Fetch the message being replied to
    const repliedToMessage = await message.channel.messages.fetch(repliedToId);
    if (repliedToMessage.author.id === client.user?.id) {
      console.log("Someone replied to my message!");
      shouldReply = true;
    }
  }

  const randomNumber = getRandom1to4();
  if (randomNumber === 1) {
    shouldReply = true;
  }
  if (!shouldReply) {
    return;
  }

  message.channel.sendTyping();

  const response = await getMessage(message.content);
  if (!response) {
    return;
  }

  message.channel.send(response);
});

client.login(process.env.DISCORD_TOKEN);
