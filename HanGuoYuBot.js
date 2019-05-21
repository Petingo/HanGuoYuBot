const TelegramBot = require('node-telegram-bot-api');
const token = process.env.HANGUOYUBOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg, metadata) => {
    bot.sendMessage(msg.chat.id, "高雄發大財！");
});

const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I'm alive");
    res.end();
});
 
server.listen(8888);