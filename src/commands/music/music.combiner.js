import botHelper from "discord-bot-helper";
import {
  joinCommand,
  leaveCommand,
  loopCommand,
  loopQueueCommand,
  nowPlayingCommand,
  pauseCommand,
  playCommand,
  resumeCommand,
  skipCommand,
} from "./music.commands.js";

const musicCombiner = botHelper.Combiner();

musicCombiner.add("join", joinCommand);
musicCombiner.add("play", playCommand);
musicCombiner.add("pause", pauseCommand);
musicCombiner.add("resume", resumeCommand);
musicCombiner.add("skip", skipCommand);
musicCombiner.add("np", nowPlayingCommand);
musicCombiner.add("loop", loopCommand);
musicCombiner.add("loopq", loopQueueCommand);
musicCombiner.add("leave", leaveCommand);

export default musicCombiner;
