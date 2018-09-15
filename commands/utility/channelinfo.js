const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var ch;
        if (message.mentions.channels.first() !== undefined) {
          ch = message.mentions.channels.first();
        } else {
          ch = message.channel;
        }
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor(`#${ch.name} info!`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
        .setDescription(`Name: \`${ch.name}\`` + '\n' +
      `Channel ID: \`${ch.id}\`` + '\n' +
      `Topic: \`${message.channel.topic}\`` + `\n` +
      `Creation Date: \`${ch.createdAt}\`` + '\n' +
      `Users: \`${ch.members.size}\``)
        message.channel.send(embed);
}

module.exports.help = {
    name: "channelinfo",
    description: "provides information about the current channel you are in"
}