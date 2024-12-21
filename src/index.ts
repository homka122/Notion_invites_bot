import TelegramBot, { type Message } from "node-telegram-bot-api";
import { appendFile } from "node:fs/promises";

const token: string = "TOKEN";
const bot = new TelegramBot(token, { polling: true });

const INPUT_FILE_SRC = "./src/input.txt";
const LOGS_FILE_SRC = "./src/logs.txt";

function dateString() {
    const options: Intl.DateTimeFormatOptions = {
        timeZoneName: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        dayPeriod: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour12: false,
    };

    return `${new Date().toLocaleString("en-us", options)}`;
}

async function writeEmail(msg: Message) {
    await appendFile(INPUT_FILE_SRC, `[${dateString()}] ${msg.chat.id} @${msg.chat.username} ${msg.text}\n`);
}

async function log(msg: Message) {
    await appendFile(LOGS_FILE_SRC, `[${dateString()}] ${msg.chat.id} @${msg.chat.username} ${msg.text}\n`);
}

const emailRegex = /^\S+@\S+\.\S+$/;
bot.onText(emailRegex, async (msg: Message) => {
    log(msg);
    writeEmail(msg);

    bot.sendMessage(msg.chat.id, "Заявка принята!");
});

bot.on("message", async (msg: Message) => {
    if (!msg.text) return;

    if (/^\S+@\S+\.\S+$/.test(msg.text)) {
        return;
    }

    log(msg);

    bot.sendMessage(msg.chat.id, "Для доступа к Notion отправьте Email своего аккаунта отдельным сообщением");
});
