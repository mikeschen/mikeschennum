import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages, tool } from "ai";
import { SYSTEM } from "../../data/system.js";
import { getInformation } from "../tools";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: openai("gpt-4o-mini"),
		system: SYSTEM,
		messages: convertToCoreMessages(messages),
		tools: {
			getInformation,
		},
		maxTokens: 1000,
	});

	return result.toAIStreamResponse();
}
