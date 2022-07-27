import { RepeatMode } from "discord-music-player";
import { musicPlayer } from "../../../bot.js";
import { mhmEmoji } from "../../services/emoji.js";
import { getQueue } from "../../services/musicHelpers.js";
import { boldText } from "../../services/textHelpers.js";

export async function joinCommand(message) {
  const guildId = message.guild.id;

  let queue = musicPlayer.createQueue(guildId);

  await queue.join(message.member.voice.channel);
  message.channel.send("Joining...");
}

export async function playCommand(message, args) {
  const guildId = message.guild.id;
  let queue = musicPlayer.createQueue(guildId);

  try {
    await queue.join(message.member.voice.channel);
    let song = await queue.play(args.join(" "));
    // song.setData({ requestedBy: message.author });
    message.channel.send(boldText(`▶ ${song.name} ${mhmEmoji}`));
  } catch (err) {
    console.log(err);
    message.channel.send(boldText("Not this song... Not playing!"));
  }
}

export function skipCommand(message) {
  const guildQueue = getQueue(message);

  guildQueue.skip();
  message.channel.send(boldText("Skipping... ⏩"));
}

export function pauseCommand(message) {
  const guildQueue = getQueue(message);
  if (guildQueue.paused) {
    return;
  }

  guildQueue.setPaused(true);
  message.channel.send(boldText("Pausing..."));
}

export function resumeCommand(message) {
  const guildQueue = getQueue(message);
  if (!guildQueue.paused) {
    return;
  }
  guildQueue.setPaused(false);
  message.channel.send(boldText("Resuming..."));
}

export function nowPlayingCommand(message) {
  const guildQueue = getQueue(message);

  const song = guildQueue.nowPlaying;
  console.log(song);

  message.channel.send(boldText(`${song.name} ▶`));
}

export function shuffleCommand(message) {
  const guildQueue = getQueue(message);

  guildQueue.shuffle();

  message.channel.send(boldText("🔀 Shuffled..."));
}

export function loopCommand(message) {
  const guildQueue = getQueue(message);

  if (guildQueue.repeatMode === RepeatMode.SONG) {
    guildQueue.setRepeatMode(RepeatMode.DISABLED);
    return message.channel.send(boldText("🔂 Loop cleared..."));
  }

  guildQueue.setRepeatMode(RepeatMode.SONG);
  message.channel.send(boldText("🔂 Looping current song..."));
}

export function loopQueueCommand(message) {
  const guildQueue = getQueue(message);

  if (guildQueue.repeatMode === RepeatMode.QUEUE) {
    guildQueue.setRepeatMode(RepeatMode.DISABLED);
    return message.channel.send(boldText("🔁 Loop cleared..."));
  }

  guildQueue.setRepeatMode(RepeatMode.QUEUE);

  message.channel.send(boldText("🔁 Looping queue..."));
}

export function leaveCommand(message) {
  const guildQueue = getQueue(message);

  guildQueue.leave();

  message.channel.send(boldText("Leaving..."));
}
