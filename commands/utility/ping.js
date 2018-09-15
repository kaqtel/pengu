const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let ping = Math.round(bot.ping);
        message.channel.send(`🏓 Pong! \`${ping}ms\``);
}

module.exports.help = {
    name: "ping",
    description: "bot response time (featuring ping pong!)"
}