import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages, tool } from "ai";
import { SYSTEM } from "../../data/system.js";
import { z } from "zod";
import { findRelevantContent } from "../../../lib/ai/embedding";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: openai("gpt-4o-mini"),
		system: SYSTEM,
		messages: convertToCoreMessages(messages),
		tools: {
			getInformation: tool({
				description: `get information from your knowledge base to answer questions.`,
				parameters: z.object({
					question: z.string().describe("the users question"),
				}),
				execute: async ({ question }) => findRelevantContent(question),
			}),
		},
		maxTokens: 1000,
	});

	return result.toAIStreamResponse();
}
