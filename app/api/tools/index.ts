import { tool } from "ai";
import { z } from "zod";
import { createResource } from "../../../lib/actions/resources";
import { findRelevantContent } from "../../../lib/ai/embedding";

export const addResource = tool({
	description: `add a resource to your knowledge base.
					If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
	parameters: z.object({
		content: z
			.string()
			.describe("the content or resource to add to the knowledge base"),
	}),
	execute: async ({ content }) => createResource({ content }),
});

export const getInformation = tool({
	description: `get information from your knowledge base to answer questions.`,
	parameters: z.object({
		question: z.string().describe("the users question"),
	}),
	execute: async ({ question }) => findRelevantContent(question),
});
