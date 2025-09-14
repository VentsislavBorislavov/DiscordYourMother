import { Client, GatewayIntentBits } from "discord.js";

const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

discordClient.once("clientReady", () => {
  console.log("We are ready to diss!");
});

discordClient.login(process.env.DISCORD_TOKEN);

export default discordClient;
