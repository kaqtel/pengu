const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
    var embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor("Command List", "https://cdn2.scratch.mit.edu/get_image/gallery/1948491_200x130.png")
        .addField(`Moderation`, `\`prefix\` \`purge\` \`kick\` \`ban\``)
        .addField(`"Fun"`, `\`8ball\` \`rps\` \`coinflip\` \`rtd\``)
        .addField(`Utility`, `\`ping\` \`info\` \`serverinfo\` \`channelinfo\` \`emotes\``, true)
        message.channel.send(embed);
}

module.exports.help = {
    name: "help",
    description: "the lovely command list!"
}