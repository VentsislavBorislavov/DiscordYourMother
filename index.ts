import dissCommand from "./commands/dissCommand";
import whoCommand from "./commands/whoCommand";
import discordClient from "./setup";

discordClient.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // if (await whoCommand(message)) {
  //   return;
  // }

  if (await dissCommand(message)) {
    return;
  }
});
