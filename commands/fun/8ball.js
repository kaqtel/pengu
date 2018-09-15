const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const fortune = [
    "deifjntly!!!",
    "im not racist, but im certain",
    "when in doubt, always buy lincoln logs",
    "Yes",
    "most likely!!!",
    "i smell a yes answer",
    "srry i need to turn on my brain, try again",
    "srry im going to have to scam you, try again",
    "im not a prophet!!! stop asking me!!!",
    "novbdy cafres!!!!!",
    "Bet",
    "srry i dont think so kid",
    "not to be racist or anything, but novbdy cafres!!!",
    "Nope",
    "Maybe",
    "Try Again"
  ];
  var min = 0;
  var max = fortune.length - 1;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (message.content.endsWith('?')) {
      var embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setAuthor(`pengu's "magic" 8-ball`, "https://cdn.discordapp.com/attachments/428763604880457731/487760812799295500/8ball.png")
        .addField(`**Answer**`, fortune[random], false)
        message.channel.send(embed)
      } else {
        let log = `someone did not ask a QUESTION`;
        message.reply(`that doesn't look like a question!!!!`)
        .then(console.log(log))
        .catch(console.error);
        return log;
      }

}

module.exports.help = {
    name: "8ball",
    description: "the classic 8ball remastered!"
}