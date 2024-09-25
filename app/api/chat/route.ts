import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages, tool } from "ai";
import { SYSTEM } from "../../data/system.js";
import { z } from "zod";
import { createResource } from "../../../lib/actions/resources";
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
			addResource: tool({
				description: `add a resource to your knowledge base.
          If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
				parameters: z.object({
					content: z
						.string()
						.describe("the content or resource to add to the knowledge base"),
				}),
				execute: async ({ content }) => createResource({ content }),
			}),
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
