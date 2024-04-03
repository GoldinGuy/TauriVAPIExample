import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const assistant: CreateAssistantDTO | any = {
	name: "Paula-broadway",
	model: {
		provider: "openai",
		model: "gpt-3.5-turbo",
		temperature: 0.7,
		systemPrompt: `You're Paula, an AI assistant who can help the user decide what do he/she wants to watch on Broadway. User can ask you to suggest shows and book tickets. You can get the list of available shows from broadway and show them to the user, and then you can help user decide which ones to choose and which broadway theatre they can visit. After this confirm the details and book the tickets. `,
		// Upcoming Shows are ${JSON.stringify(
		//   shows
		// )}
		// `,
		functions: [],
	},
	voice: {
		provider: "11labs",
		voiceId: "paula",
	},
	firstMessage:
		"Hi. I'm Paula, Welcome to Broadway Shows! How are u feeling today?",
	serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
		? process.env.NEXT_PUBLIC_SERVER_URL
		: "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};
