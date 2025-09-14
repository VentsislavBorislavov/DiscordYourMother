import { openai } from "./client";
import { dissPrompt } from "./prompt";
import { createUserMessage } from "./utils";

export const getMessage = async (message: string) => {
  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: dissPrompt,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: await createUserMessage(message),
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

  if (response.error) {
    return null;
  }

  return response.output_text;
};
