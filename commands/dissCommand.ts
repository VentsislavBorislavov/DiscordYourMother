import type { OmitPartialGroupDMChannel, Message } from "discord.js";
import { getRandom, pickRandom } from "../utils/chance";
import { getDissMessage } from "../ai/diss";
import { JokeResponseType } from "../types/response";
import { shouldReply } from "../utils/reply-check";
import discordClient from "../setup";
import { replyPhrases } from "../utils/phrases";
import { emojis } from "../constants/emojis";

export default async function dissCommand(
  message: OmitPartialGroupDMChannel<Message<boolean>>,
) {
  let shouldDoRandomDiss = false;
  const shouldSendWhoDiss = shouldReply(message.content, replyPhrases);

  try {
    if (message.reference && message.reference.messageId) {
      const repliedToId = message.reference.messageId;

      // Fetch the message being replied to
      const repliedToMessage =
        await message.channel.messages.fetch(repliedToId);
      if (repliedToMessage.author.id === discordClient.user?.id) {
        console.log("Someone replied to my message!");
        shouldDoRandomDiss = true;
      }
    }

    const randomNumber = getRandom(3);
    if (randomNumber === 1) {
      shouldDoRandomDiss = true;
    }
    if (!shouldDoRandomDiss && !shouldSendWhoDiss) {
      return false;
    }

    message.channel.sendTyping();

    const response = await getDissMessage(
      message.content,
      JokeResponseType.DissJoke,
    );
    if (!response) {
      return false;
    }
    message.channel.send(`${response} ${pickRandom(emojis)}`);
    return true;
  } catch (e) {
    console.error(e);
  }
  return false;
}
