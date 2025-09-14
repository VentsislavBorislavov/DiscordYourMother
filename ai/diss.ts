import { JokeResponseType } from "../types/response";
import { openai } from "./client";
import { dissPrompt, whoPrompt } from "./prompt";
import { createUserDissPrompt, createUserWhoPrompt } from "./user-prompt";

export const getDissMessage = async (
  message: string,
  responseType: JokeResponseType,
) => {
  let systemPrompt = "";
  let userPrompt = "";

  switch (responseType) {
    case JokeResponseType.WhoJoke:
      systemPrompt = whoPrompt;
      userPrompt = await createUserWhoPrompt(message);
      break;
    case JokeResponseType.DissJoke:
    default:
      systemPrompt = dissPrompt;
      userPrompt = await createUserDissPrompt(message);
      break;
  }
  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: systemPrompt,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: userPrompt,
          },
        ],
      },
    ],
    text: {
      format: {
        type: "text",
      },
    },
    reasoning: {},
    tools: [],
    temperature: 1,
    max_output_tokens: 2048,
    top_p: 1,
    store: true,
  });

  if (response.error || response.output_text === "null") {
    return null;
  }

  return response.output_text;
};
