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
  ":WokePepe:",
  ":flushed:",
  generateGuildEmoji("suure"),
  generateGuildEmoji("poggers"),
  generateGuildEmoji("ConceitedReaction"),
  generateGuildEmoji("realshit"),
  generateGuildEmoji("iamok"),
  generateGuildEmoji("PepeYikes"),
  generateGuildEmoji("huh"),
  generateGuildEmoji("smileW"),
  generateGuildEmoji("Cursed"),
  generateGuildEmoji("quickcheck"),
];

// :suure: :poggers: :ConceitedReaction::realshit::iamok::PepeYikes::huh::smileW::Cursed::quickcheck:
