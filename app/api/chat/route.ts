import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { MIKE } from "../../data/mike.js";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: openai("gpt-4o-mini"),
		system: MIKE,
		messages: convertToCoreMessages(messages),
	});

	return result.toAIStreamResponse();
}
