import dissCommand from "./commands/dissCommand";
import { reactMhm } from "./commands/reactCommand";
import discordClient from "./setup";

discordClient.on("messageCreate", async (message) => {
  console.log("hello");

  console.log(message.attachments);
  if (message.author.bot) return;

  if (await reactMhm(message)) {
    return;
  }

  // if (await whoCommand(message)) {
  //   return;
  // }

  if (await dissCommand(message)) {
    return;
  }
});
