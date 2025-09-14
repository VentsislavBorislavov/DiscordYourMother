import type { OmitPartialGroupDMChannel, Message } from "discord.js";
import { shouldReply } from "../utils/reply-check";
import { eNe } from "../utils/phrases";
import { mhmEmoji } from "../constants/emojis";

export const reactMhm = async (
  message: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  if (shouldReply(message.content, eNe)) {
    message.react(mhmEmoji);
    return true;
  }

  return false;
};
