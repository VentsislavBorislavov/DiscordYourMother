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
  let shouldSendWhoDiss = shouldReply(message.content, replyPhrases);

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

    const randomDissNumber = getRandom(+(process.env.RANDOM_DISS_CHANCE || 0));
    const randomWhoNumber = getRandom(+(process.env.RANDOM_WHO_CHANCE || 0));
    if (randomDissNumber === 1) {
      shouldDoRandomDiss = true;
    }
    if (randomWhoNumber !== 1) {
      shouldSendWhoDiss = false;
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
    message.reply(`${response} ${pickRandom(emojis)}`);
    return true;
  } catch (e) {
    console.error(e);
  }
  return false;
}
