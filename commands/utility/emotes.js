const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let emotes = message.channel.guild.emojis.array(e => `:${e.name}:`).join('  ')
        var embed = new Discord.RichEmbed()
          .setAuthor(`${message.guild.name} emotes`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
          .setDescription(emotes)
          .setColor(0xFFFF00)
          .setTimestamp(new Date())
          .setFooter(`Total of ${message.guild.emojis.size} emotes in ${message.guild.name}`)
          message.channel.send(embed);
}

module.exports.help = {
    name: "emotes",
    description: "lists all the server emotes available"
}