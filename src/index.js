import express from 'express';
import line from 'linebot';
import { config } from './config.js';
import { handleEvent } from './handlers/eventHandler.js';

const bot = line({
    channelSecret: config.line.channelSecret,
    channelAccessToken: config.line.channelAccessToken
});

bot.on('message', async (event) => {
    const reply = await handleEvent(event);
    if (reply) {
        event.reply(reply);
    }
});

const app = express();

app.post('/webhook', bot.parser());

app.listen(process.env.PORT || 3000, () => {
    console.log('LINE bot is running.');
});
