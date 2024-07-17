import 'dotenv/config';

export const config = {
    line: {
        channelSecret: process.env.LINE_CHANNEL_SECRET,
        channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
    },
    openai: {
        apiKey: process.env.OPENAI_API_KEY
    }
};
