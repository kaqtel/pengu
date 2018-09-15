const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args, prefix) => {

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permissions to change the prefix.");
    if (!args[0] || args[0 == "help"]) return message.reply(`Usage: -prefix "your desired prefix here"`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let pEmbed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor(`Prefix changed!`, "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
        .setDescription(`Prefix set to ${args[0]}`);

    message.channel.send(pEmbed);
}

module.exports.help = {
    name: "prefix",
    description: "custom prefixes!!!!"
}