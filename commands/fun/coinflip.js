const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var min = 1;
        var max = 175000000
        var chance = Math.floor(Math.random() * (max - min + 1)) + min;
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
        var embed = new Discord.RichEmbed()
          .setAuthor(result)
          .setImage(image)
          .setColor(colors)
          .setFooter(footer)
          message.channel.send(embed);
}

module.exports.help = {
    name: "coinflip",
    description: "heads or tails, with a random chance of winning the lottery"
}