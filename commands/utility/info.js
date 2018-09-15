const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var totalSec = bot.uptime / 1000;
        var days = Math.floor(totalSec / 216000);
        var hours = Math.floor(totalSec / 3600);
        totalSec %= 3600;
        var mins = Math.floor(totalSec / 60);
        var secs = Math.floor(totalSec % 60);
        var ram = Math.floor(process.memoryUsage().heapUsed / 1024 / 1024);    
        var embed = new Discord.RichEmbed()
        .setTitle("a not very good bot by a not very smart person  ~~(bot by pwngu)~~", "")
        .setURL("https://discord.gg/dYmku7D")
        .setDescription("probably for personal usage, goal is to actually make this stupid thing functional")
        .setColor(0xFFFF00)
        .setTimestamp(new Date())
        .setFooter(`made by ("pwngu")#1290`, "https://applech2.com/wp-content/uploads/2018/05/nodeScratchpad-logo-icon.jpg")
        .setThumbnail(bot.user.avatarURL)
        .setAuthor("pengu", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "https://discord.gg/dYmku7D")
        .addField("Stats", `Servers: \`${bot.guilds.size}\`` + '\n' +
      `Users: \`${bot.users.size}\`` + '\n' +
      `Channels: \`${bot.channels.size}\`` + '\n' +
      `Uptime: \`${days} days, ${hours} hours, ${mins} minutes, and ${secs} seconds\`` + '\n' +
      `RAM: \`${ram}MB\``
        , false)
        .addField("Usage", `To get started, type "help" to see my list of commands`)
        .addField("Bot Invite", `Click [here](https://discordapp.com/oauth2/authorize?client_id=266691925850062849&scope=bot&permissions=8) to invite this bot to your server!`)
        .addField("Support", `To report a bug or request help, join the [support server](https://discord.gg/dYmku7D)` + `\n` +
        `You may also alternatively message ("pwngu")#0281`, true)
        message.channel.send(embed);
        }


module.exports.help = {
    name: "info",
    description: "information about this not very good bot!"
}