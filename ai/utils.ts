export const createUserMessage = async (message: string) => {
  const language = "Bulgarian";
  const joke = await fetchYourMomJoke();
  return `UserMessage: ${message}\nYour mom' joke: ${joke}\nLanguage: ${language}`;
};

export const fetchYourMomJoke = async () => {
  const res = await fetch("https://www.yomama-jokes.com/api/v1/jokes/random/");
  const { joke } = (await res.json()) as { joke: string };
  return joke;
};
