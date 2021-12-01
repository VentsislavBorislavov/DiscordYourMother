import dotenv from 'dotenv'
dotenv.config();

const generateGuildEmoji = (emoji) => `<:${emoji}:${process.env.GUILD_ID}>`;

export const emojis = [
  "😎",
  "😍",
  "🥰",
  "😨",
  "🥵",
  "😡",
  "🤮",
  "😈",
  "💩",
  "🙉",
  "🤢",
  "🥺👉👈",
  ":flushed:",
  "<:huh:761639990408380417>","<:suure:827170870551511091>>","<:Pog:761637108104036374>>","<:SANDOW:797226660931174450>>","<:booba2:812040156571500565>>","<:MonkaS:761637199795978262>>","💦>","<:poggers:761637071537700885>>","<:WokePepe:761639370670997504>>","<:kappa:788673119333646346>>","<:imOkayChamp:761637401805455401>>","<:iamok:799304088235016252>>",
];

// :suure: :poggers: :ConceitedReaction::realshit::iamok::PepeYikes::huh::smileW::Cursed::quickcheck:
