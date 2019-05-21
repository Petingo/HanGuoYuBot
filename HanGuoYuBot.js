const TelegramBot = require('node-telegram-bot-api');
const token = process.env.HANGUOYUBOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg, metadata) => {
    bot.sendMessage(msg.chat.id, "高雄發大財！");
});