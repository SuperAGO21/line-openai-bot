import fetch from 'node-fetch';
import { config } from '../config.js';

export async function getChatGPTResponse(userMessage) {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.openai.apiKey}`
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 50  // 応答の最大トークン数（調整可能）
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
