const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
    
}

module.exports.help = {
    name: "serverinfo",
    description: "provides information about the server you are currently in"
}