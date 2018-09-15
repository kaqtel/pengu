const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let kReason = args.join(" ").slice(22);
    if (!kUser) return message.channel.send("User not found");
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('WHERE ARE YOUR PERMS KID!!!');
    if(kUser.hasPermission('KICK_MEMBERS')) return message.reply('WHO ARE YOU TRYING TO SCAM????');

    message.channel.send(`and just like that, ${kUser} is gone! 👋`);
    message.guild.member(kUser).kick(kReason);
}

module.exports.help = {
    name: "kick",
    description: "get rid of the pesky people from your server!!!!"
}