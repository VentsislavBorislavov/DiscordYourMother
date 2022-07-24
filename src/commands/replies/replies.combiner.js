import botHelper from "discord-bot-helper";
import {
  sPhrases,
  naPhrases,
  bgPhrase,
  egPhrase,
  momPhrase,
  egWhere,
  bgWhere,
} from "../../services/phrases.js";
import { shouldReply } from "../../services/shouldReply.js";
import {
  replyWithYourMomBG,
  replyOnYourMotherBG,
  replyYourMomBG,
  replyYourMomEN,
  replyJokeOrDiss,
  replyToYourMotherEN,
  replyToYourMotherBG,
} from "./replies.commands.js";

const repliesCombiner = botHelper.Combiner();

repliesCombiner.add(
  (content) => shouldReply(content, sPhrases),
  replyWithYourMomBG
);
repliesCombiner.add(
  (content) => shouldReply(content, naPhrases),
  replyOnYourMotherBG
);
repliesCombiner.add(
  (content) => shouldReply(content, bgPhrase),
  replyYourMomBG
);
repliesCombiner.add(
  (content) => shouldReply(content, egPhrase),
  replyYourMomEN
);
repliesCombiner.add(
  (content) => shouldReply(content, momPhrase),
  replyJokeOrDiss
);
repliesCombiner.add(
  (content) => shouldReply(content, egWhere),
  replyToYourMotherEN
);
repliesCombiner.add(
  (content) => shouldReply(content, bgWhere),
  replyToYourMotherBG
);

export default repliesCombiner;
