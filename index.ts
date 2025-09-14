import { Client, GatewayIntentBits } from "discord.js";
import { getMessage } from "./ai/diss";
import { getRandom } from "./ai/changes";
import { serve } from "bun";

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

  try {
    if (message.reference && message.reference.messageId) {
      const repliedToId = message.reference.messageId;

      // Fetch the message being replied to
      const repliedToMessage =
        await message.channel.messages.fetch(repliedToId);
      if (repliedToMessage.author.id === client.user?.id) {
        console.log("Someone replied to my message!");
        shouldReply = true;
      }
    }

    const randomNumber = getRandom(3);
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
  } catch (e) {
    console.error(e);
  }
});

client.login(process.env.DISCORD_TOKEN);

serve({
  port: process.env.PORT || 3000,
  fetch() {
    return new Response("Bot is running!");
  },
});
