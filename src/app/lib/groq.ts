import Groq from "groq-sdk";
export async function main(message: string) {
  const groq = new Groq({
    apiKey: "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",
  });
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-70b-8192",
    });
    const chatResult = (await completion.choices[0]?.message?.content) || "";
    console.log(chatResult);
    return chatResult;
  } catch (error: any) {
    console.error(error?.message);
  }
}
