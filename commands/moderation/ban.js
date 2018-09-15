const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let bReason = args.join(" ").slice(22);
    if (!bUser) return message.channel.send("User not found");
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('WHERE ARE YOUR PERMS KID!!!');
    if(bUser.hasPermission('KICK_MEMBERS')) return message.reply('WHO ARE YOU TRYING TO SCAM????');

    message.channel.send(`and just like that, ${bUser} is gone! 👋`);
    message.guild.member(bUser).kick(bReason);
}

module.exports.help = {
    name: "ban",
    description: "get rid of the pesky people permanently!!!!!"
}