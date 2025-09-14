import type { OmitPartialGroupDMChannel, Message } from "discord.js";
import { shouldReply } from "../utils/reply-check";
import { getDissMessage } from "../ai/diss";
import { JokeResponseType } from "../types/response";

export default async function whoCommand(
  message: OmitPartialGroupDMChannel<Message<boolean>>,
) {
  if (!shouldReply(message.content)) {
    return false;
  }

  try {
    message.channel.sendTyping();
    const response = await getDissMessage(
      message.content,
      JokeResponseType.WhoJoke,
    );

    if (!response) {
      message.reply("Заеби");
      return true;
    }

    message.channel.send(response);
    return true;
  } catch (e) {
    console.log(e);
  }

  return false;
}
