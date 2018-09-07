const Discord = require("discord.js");
const YTDL = require("ytdl-core")

const bot = new Discord.Client({disableEveryone: true});

const TOKEN = "dont even look at history for this one because i already regenerated it lol"
const PREFIX = ""

const result_images = [
  "https://vignette.wikia.nocookie.net/geometry-dash/images/2/28/SecretCoin.png/revision/latest?cb=20171218125026",
  "https://vignette.wikia.nocookie.net/geometry-dash/images/3/38/UserCoinVerified.png/revision/latest?cb=20171203235714",
  "https://vignette.wikia.nocookie.net/geometry-dash/images/a/a6/UserCoinConcept.png/revision/latest?cb=20150930055737"
];

const results = [
  "Heads",
  "Tails",
  "GUESS WHO WON THE LOTTERY???",
];

const result_colors = [
  "0xFFFF00",
  "0xC0C0C0",
  "0x00FFFF"
]

const result_footer = [
  "",
  "",
  "protip: you just won the lottery"
]



// start

var servers = {};

bot.on("ready", () => {
  console.log(`Total of ${bot.users.size} users, in ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`geometrash with ${bot.guilds.size} servers`, {type: `PLAYING`});
});

// tagging


bot.on('message', message => {
  if (message.isMentioned(bot.user)) {
    message.reply("STOP TAGGING ME!!!!!!")
  }
});




// general

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "ping":
        let ping = Math.round(bot.ping);
        message.channel.send(`🏓 Pong! \`${ping}ms\``);
        break;
      case "help":
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor("Command List", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
        .addField("Utility", `\`ping\` \`info\` \`serverinfo\` \`channelinfo\` \`emotes\` \`invitation\` \`support\` `)
        message.channel.send(embed);
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
        .setFooter(`made by ("pwngu")#1290`, "https://applech2.com/wp-content/uploads/2018/05/nodeScratchpad-logo-icon.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/428763604880457731/485700383486771201/discord.png")
        .setAuthor("pengu", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "https://discord.gg/dYmku7D")
        .addField("Stats", `Servers: \`${bot.guilds.size}\`` + '\n' +
      `Users: \`${bot.users.size}\`` + '\n' +
      `Channels: \`${bot.channels.size}\`` + '\n' +
      `Uptime: \`${hours} hours, ${mins} minutes, and ${secs} seconds\`` + '\n' +
      `RAM: \`${ram}MB\``
        , false)
        message.channel.send(embed);
        break;
      case "invitation":
        message.channel.send("https://discordapp.com/oauth2/authorize?client_id=266691925850062849&scope=bot&permissions=8")
        break;
      case "support":
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setTitle("Discord Server Invite")
        .setDescription("more like, free advertisement for my server because practically nobody will use this")
        .setURL("https://discord.gg/dYmku7D")
        .setAuthor("Support Server", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "https://discord.gg/dYmku7D")
        .setFooter(`made by ("pwngu")#1290`, "https://applech2.com/wp-content/uploads/2018/05/nodeScratchpad-logo-icon.jpg")
        message.channel.send(embed);
        break;
      case "serverinfo":
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setTimestamp(new Date())
        .setFooter(`made by ("pwngu")#4092`, "https://applech2.com/wp-content/uploads/2018/05/nodeScratchpad-logo-icon.jpg")
        .setTitle(`${message.guild.name} is a server that is owned by ${message.guild.owner.displayName} with a total of ${message.guild.memberCount} members!`)
        .setURL(`https://discord.gg/dYmku7D`)
        .setThumbnail(`${message.guild.iconURL}`)
        .setAuthor(`${message.guild.name}`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png", "")
        .addField("Server Info", `Name: \`${message.guild.name}\`` + '\n' +
      `Server ID: \`${message.guild.id}\`` + '\n' +
      `Owner: \`${message.guild.owner.displayName}\`` + '\n' +
      `Members: \`${message.guild.memberCount}\`` + '\n' +
      `Region: \`${message.guild.region}\``
        , false)
        message.channel.send(embed);
        break;
      case "channelinfo":
        var ch;
        if (message.mentions.channels.first() !== undefined) {
          ch = message.mentions.channels.first();
        } else {
          ch = message.channel;
  }
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor(`#${ch.name} | Info`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
        .setDescription(`Name: \`${ch.name}\`` + '\n' +
      `Channel ID: \`${ch.id}\`` + '\n' +
      `Topic: \`${message.channel.topic}\`` + `\n` +
      `Creation Date: \`${ch.createdAt}\`` + '\n' +
      `Users: \`${ch.members.size}\``)
        message.channel.send(embed);
        break;
      case "emotes":
        let emotes = message.channel.guild.emojis.array(e => `:${e.name}:`).join('  ')
        var embed = new Discord.RichEmbed()
          .setAuthor(`${message.guild.name} emotes`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
          .setDescription(emotes)
          .setColor(0xFFFF00)
          .setTimestamp(new Date())
          .setFooter(`Total of ${message.guild.emojis.size} emotes`)
          message.channel.send(embed);
          break;
      case "coinflip":
        var minimum = 1;
        var maximum = 175000000
        var chance = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        var embed = new Discord.RichEmbed()
        let result;
        let image;
        if (chance > 87500001) {
          result = results[0];
          image = result_images[0];
          colors = result_colors[0];
          footer = result_footer[0];
        }
        else if (chance > 2) {
          result = results[1];
          image = result_images[1];
          colors = result_colors[1];
          footer = result_footer[1];
        }
        else {
          result = results[2];
          image = result_images[2];
          colors = result_colors[2];
          footer = result_footer[2]
        }
        var rich_embed = new Discord.RichEmbed()
          .setAuthor(result)
          .setImage(image)
          .setColor(colors)
          .setFooter(footer)
          ;
          message.channel.send(rich_embed)
          break;
        
  }

});





bot.login(process.env.BOT_TOKEN)
