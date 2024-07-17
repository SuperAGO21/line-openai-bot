import { getChatGPTResponse } from './replyMessages.js';

export async function handleEvent(event) {
    if (event.type === 'message' && event.message.type === 'text') {
        const userMessage = event.message.text;
        const replyMessage = await getChatGPTResponse(userMessage);
        
        return {
            type: 'text',
            text: replyMessage
        };
    }

    return null;
}
