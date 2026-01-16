import type { OmitPartialGroupDMChannel, Message } from "discord.js";
import { shouldReply } from "../utils/reply-check";
import { getDissMessage } from "../ai/diss";
import { JokeResponseType } from "../types/response";
import { replyPhrases } from "../utils/phrases";
import { fetchImageAsBase64 } from "../utils/image";

export default async function whoCommand(
  message: OmitPartialGroupDMChannel<Message<boolean>>,
) {
  if (!shouldReply(message.content, replyPhrases)) {
    return false;
  }

  try {
    message.channel.sendTyping();

    // Extract image attachment if present and convert to base64
    let imageData: { base64: string; mimeType: string } | undefined;
    if (message.attachments.size > 0) {
      const firstAttachment = message.attachments.first();
      if (
        firstAttachment &&
        firstAttachment.contentType?.startsWith("image/")
      ) {
        const fetchedImage = await fetchImageAsBase64(firstAttachment.url);
        if (fetchedImage) {
          imageData = fetchedImage;
        }
      }
    }

    const response = await getDissMessage(
      message.content,
      JokeResponseType.WhoJoke,
      imageData,
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
