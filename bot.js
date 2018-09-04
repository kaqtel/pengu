const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const YTDL = require("ytdl-core")

const bot = new Discord.Client({disableEveryone: true});

const TOKEN = "MjY2NjkxOTI1ODUwMDYyODQ5.DcJxag.QA5Dhk6F4dfteRRrC2ACAiwKoww"
const PREFIX = ""

// start

var servers = {};

bot.on("ready", () => {
  console.log(`Total of ${bot.users.size} users, in ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`geometrash with ${bot.guilds.size} servers`, {type: `PLAYING`});
});

// autorole



// general

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "ping":
        message.channel.send(`🏓 Pong! \`${bot.ping}ms\``);
        break;
      case "info":
        var totalSec = bot.uptime / 1000;
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
        .setFooter(`made by ("pwngu")#4092`, "https://applech2.com/wp-content/uploads/2018/05/nodeScratchpad-logo-icon.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/428763604880457731/485700383486771201/discord.png")
        .setAuthor("pengu", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "https://discord.gg/dYmku7D")
        .addField("Stats", `Servers: \`${bot.guilds.size}\`
        Users: \`${bot.users.size}\`
        Channels: \`${bot.channels.size}\`
        Uptime: \`${hours} hours, ${mins} minutes, and ${secs} seconds\`
        RAM: \`${ram}MB\``
        , false)
        message.channel.send(embed);
        break;
      case "invitation":
        message.channel.send("https://discordapp.com/oauth2/authorize?client_id=266691925850062849&scope=bot&permissions=8")
        break;
      case "uptime":
        var totalSec = bot.uptime / 1000;
        var hours = Math.floor(totalSec / 3600);
        totalSec %= 3600;
        var mins = Math.floor(totalSec / 60);
        var secs = Math.floor(totalSec % 60);
        message.channel.send(`Uptime: \`${hours} hours, ${mins} minutes, and ${secs} seconds\``)
        break;
      case "support":
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setTitle("Discord Server Invite")
        .setDescription("more like, free advertisement for my server because practically nobody will use this")
        .setURL("https://discord.gg/dYmku7D")
        .setAuthor("Support Server", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "https://discord.gg/dYmku7D")
        .setFooter(`("pwngu")#4092`)
        message.channel.send(embed);
        break;

  }



});


bot.login(process.env.BOT_TOKEN)
