const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pUser = message.member.user
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('WHERE ARE YOUR PERMS KID!!!');
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply('I NEED MY PERMS KID!!!!!');
    if (!args[0]) return message.channel.send('HOW MUCH DO I DELETE???');
    if (args[0] < 1) return message.channel.send('IM NOT DELETING UR ONLY CHEAP MESSAGE!!!');
    if (args[0] > 100) return message.channel.send('TOO MANY MESSAGES KID!!!');
    if(isNaN(args[0])) return message.channel.send('THATS NOT A NUMBER NIFAJIT!!!');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${pUser} deleted **${args[0]}** messages!`).then(sentMessage => {
            sentMessage.delete(4000)
        }).then(message = message.delete(4000));
    })

}

module.exports.help = {
    name: "purge",
    description: "delete gugly messages!!!"
}