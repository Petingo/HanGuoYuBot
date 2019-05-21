const TelegramBot = require('node-telegram-bot-api');
const token = process.env.HANGUOYUBOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });
const PORT = process.env.PORT || 8888;

bot.on("message", (msg, metadata) => {
    bot.sendMessage(msg.chat.id, "高雄發大財！");
});

// check alive
const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I'm alive");
    res.end();
});
 
server.listen(PORT);