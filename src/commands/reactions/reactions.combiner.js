import botHelper from "discord-bot-helper";
import { eNe } from "../../services/phrases.js";
import { shouldReplyExact } from "../../services/shouldReply.js";
import { reactMhm } from "./reactions.commands.js";

const reactionsCombiner = botHelper.Combiner();

reactionsCombiner.add((content) => shouldReplyExact(content, eNe), reactMhm);

export default reactionsCombiner;
