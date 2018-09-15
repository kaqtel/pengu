const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var image = [
        "https://cdn.discordapp.com/attachments/428763604880457731/490347135212978176/one.png",
        "https://cdn.discordapp.com/attachments/428763604880457731/490347145178775562/two.png",
        "https://cdn.discordapp.com/attachments/428763604880457731/490347155610009621/three.png",
        "https://cdn.discordapp.com/attachments/428763604880457731/490347165638459393/four.png",
        "https://cdn.discordapp.com/attachments/428763604880457731/490347173381144577/five.png",
        "https://cdn.discordapp.com/attachments/428763604880457731/490347181484802048/six.png"
      ]
        var desc = [
          "You rolled a one!",
          "You rolled a two!",
          "You rolled a three!",
          "You rolled a four!",
          "You rolled a five!",
          "You rolled a six!"
        ]
      var min = 1
      var max = 6
      var dice = Math.floor(Math.random() * (max - min + 1)) + min;
      var embed = new Discord.RichEmbed()
      .setColor(0xea596e)
      .setAuthor(`roll the dice!!!`)
      if (dice == 1) { // rolling on one        
          embed.setImage(image[0])
          embed.setDescription(desc[0]) 
        } else if (dice == 2) { // rolling on two
          embed.setImage(image[1])
          embed.setDescription(desc[1]) 
        } else if (dice == 3) { // rolling on three
          embed.setImage(image[2])
          embed.setDescription(desc[2])
        } else if (dice == 4) { // rolling on four
          embed.setImage(image[3])
          embed.setDescription(desc[3])
        } else if (dice == 5) { // rolling on five
          embed.setImage(image[4])
          embed.setDescription(desc[4])
        } else { // rolling on six
          embed.setImage(image[5])
          embed.setDescription(desc[5])
        }
      message.channel.send(embed);
}

module.exports.help = {
    name: "rtd",
    description: "roll some dice!"
}