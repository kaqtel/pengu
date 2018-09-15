const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // symbols
    const rps_symbols = [
        "🌑",
        "📄",
        "✂",
        "🔫"
      ];

      // outcomes
      const rps_outcomes = [
        "winner winner chicken dinner",
        "accident",
        "what the hell???"
      ];

  
      
      
    let rps_choice = message.content.substring((args + 'rps ').length);

        if (rps_choice != 'r' && rps_choice != 'p' && rps_choice != 's' && rps_choice != 'g' && rps_choice != 'gun' && rps_choice != 'rock' && rps_choice != 'paper' && rps_choice != 'scissors' && rps_choice != 'scissor') {
          let log = `someone didnt do rps correctly`;
          message.reply(`you obviously need to choose something`)
          .then(console.log(log))
          .catch(console.error);
          return log;
        }

        if (rps_choice == 'r')  {
          rps_choice = rps_symbols[0];
        }
        else if (rps_choice == 'p') {
          rps_choice = rps_symbols[1];
        }
        else if (rps_choice == 's') {
          rps_choice = rps_symbols[2];
        }
        else if (rps_choice == 'g') {
          rps_choice = rps_symbols[3];
        }
        else if (rps_choice == 'gun') {
          rps_choice = rps_symbols[3];
        }
        else if (rps_choice == 'rock') {
          rps_choice = rps_symbols[0];
        }
        else if (rps_choice == 'paper') {
          rps_choice = rps_symbols[1];
        }
        else if (rps_choice == 'scissor') {
          rps_choice = rps_symbols[2];
        }
        else if (rps_choice == 'scissors') {
          rps_choice = rps_symbols[2];
        }

        var min = 0;
        var max = 2;
        var bot_rps_choice = rps_symbols[Math.floor(Math.random() * (max - min + 1)) + min];
        var bot_like = Math.floor(Math.random() * (max - min + 1)) + min;

        var embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setAuthor(`rock, paper, scissors!!!`)
        .addField(`your pick`, rps_choice, true)
        .addField(`pengu's pick`, bot_rps_choice, true)

        if (rps_choice == rps_symbols[0] && bot_rps_choice == rps_symbols[2] ||
            rps_choice == rps_symbols[1] && bot_rps_choice == rps_symbols[0] ||
            rps_choice == rps_symbols[2] && bot_rps_choice == rps_symbols[1]) {
              embed.addField('Results', rps_outcomes[0]);
              embed.setColor(0x00FF00)
            }
            else if (rps_choice == rps_symbols[0] && bot_rps_choice == rps_symbols[0] ||
                     rps_choice == rps_symbols[1] && bot_rps_choice == rps_symbols[1] ||
                     rps_choice == rps_symbols[2] && bot_rps_choice == rps_symbols[2]) {
                       embed.addField('Results', rps_outcomes[1]);
                       embed.setColor(0xFFFFFF)
                     }
                     else if (rps_choice == rps_symbols[3] && bot_rps_choice == rps_symbols[0] ||
                              rps_choice == rps_symbols[3] && bot_rps_choice == rps_symbols[1] ||
                              rps_choice == rps_symbols[3] && bot_rps_choice == rps_symbols[2]) {
                                embed.addField('Results', rps_outcomes[2]);
                                embed.setColor(0xFFFF00)
                              }
        else {
          embed.addField('Results', `so sad :( , can this hit ${bot_like} likes`);
          embed.setColor(0xFF0000)
        }

        message.channel.send(embed);
}

module.exports.help = {
    name: "rps",
    description: "rock! paper! scissors! gun!"
}