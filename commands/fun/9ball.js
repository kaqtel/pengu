const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var fortunes = [
        "JUST BUY AN 8BALL YOURSELF CHEAP KID",
        "ILL TELL YOU ONCE I GET MY VBUCKS NOW!!!!",
        "NOBODY CARES!!!! PUNBG NJIOW!!!!!!",
        "UR DEIFNTLY A MINON FAN",
        "WJAHT DO YIU M EAMN???? UDIOPATE 2.2 ISK NEVER COMNING OUT!!!!!!!!!!!",
        "WHO ARE YOU TRYING TOI SCAM????",
        "NOVBDY CAFRES!!!! IM BACK!!!!!!!",
        "?????? Gift for my Subscribers Click Here: ??? http://us.baptizing868hd.top/amazongo/index_h.html?model=iPhone&brand=Apple&osversion=IOS%2011.3&ip=166.137.252.60&city=New%20York&voluumdata=deprecated&eda=deprecated&cep=0oWLKQbS1T9RixRYjRRtbsr3N5-1a30Z2c8aBHX2WbN9ufu1fkikKwGQeGMTRXJ7YXzTdqOGK4Hs25CoEDk8JAv6uWoKjiD-e5hHZ3uxJ9ydx3yxO-Mhzuq7taZIvzJDOD2HN1LaD44qfBdLN5RZaWAbwBiPzMuU5Ag1Iljzk6428Bn6ZIghu7Kw15RuFsRyrSPF1_-m8wQT-3V3RyayGWWnurVDvRuUVq5bZcuDtrncJGV6iOm9jJDIPBkaU-QCmNegyZ2nlP89vOCnlaGARqQDdcQM7qzjwBjfZEUh8YrLrcAbnVWtE7vgiKCL3RwhVm2RchOgW83MKSdZGBaOVwBShqAAaMhKT3YIYeTjMPHmfHmxZuEDJD5fdzT4dw3D&clickid=aeeae6c572a79a17f6d613a6cf46eadd&channel_id=justflipacoin.com_119450&rtb_source=A4g_sunny0507_pp_ios&campaign_id=4585041&sizeid=32050&mediaid=pulsepoint",
        "I AGREE, I AGREE SO MUCH!!!!!",
        "HAHHA MORE LIKE MASTERPLAYS LOVES DICK IN HIS MOUTH",
        "WHAT THE FUCK IS WRONG WITH YOU?????",
        "BE SURE TO JOIN MY AWESOME SERVER: https://discord.gg/dYmku7D",
        "YOU ARE UNBELIEVABLE. IM NOT ANSWERING UR CHEAP QUESTIONS!!!!!",
        "WHAT ARE YOU TALKING ABOUT I ALREADY KNOW KOTA LOVES MEN",
        "My number boys, Text Me :) 7342772307",
        "ARE YOU HAVE MANY  STUPID?????",
        "HAHAHAHAHA IM NOT ANSWERING BIG SCAMMERS",
        "ARE YOU A SHEEP OR SOMETHING?????",
        "WHO EVEN ARE YOU KID??? ALL YOU DO IS POST AT 11:11 DISGUSTIJNG NIFAJIT!!!",
        "BLACK LIVES MATTER??? MORE LIKE NOBODY MATTERS HAHAHAHAHHA",
        "YE S  IKJOWW PANDA WATCHES RWBY LEIFKE A BFIG LOSSER",
        "PWNGU LIKES FEMALES!!!! U DIGUSTING KID",
        "THIS IS UNBEGIALBLE",
        "WHY ARE YOU ASKING ME KID????",
        "WHAT ARE YOU ASKING ME FOR???",
        "DO YOU HAVE A BETTER QUESTION??? U DISGUSTING KID",
        "good question",
        "Why would you say something so controversial, yet so brave?",
        "NOBOGFYD CAFERS!!!!! KILL THE WHALES NOW!!!",
        "NOT TO BE RACIST OR ANYTHING, BUT NOLVBKDY CAFRES!!!!!!!!",
        "OH IM SRRY, ARE YOU ENTITLED TO AN ANSWER??? TOO BAD NIFAJIT!!! AHHAAHAHHAHAHAHA",
        "Yes.",
        "No.",
        "Try again.",
        "Probably",
        "WHAT???",
        "WHO IS TAGGING ME????",
        "WHAT DID I JUST SAY??? NO ACE ATOTONREY!!!!!",
        "OF COURSE MASTER LIKES BOYS!!! HE LIKES BIG PEEPEE IN MOUTH!!!",
        "MORE LIKE, PWNGU IS NEVER RELEASING A NEW LEVEL!!!!",
        "MORE LIKE WOOGI141 IS NEVER RELEASING HIS NEW **HARD** LEVEL!!!!!!!",
        "WYATCH OUT RL YO UMIFH END UDP EWJTH A SHEEP",
        "BRO CHILL WITH THE RACISM",
        "WHOA!!! CHILL KID",
        "STOP ASKING ME THESE DIRTY QUESTIONS!!!!!",
        "You know what, Fuck You, I don't care what you say. I want to kill the whales.",
        "Awesome buddy! Be sure to check out my YouTube: https://www.youtube.com/c/pwngu",
        "Be sure to donate my Paypal at mathematicalmagician@gmail.com",
        "use this link when pwngu streams: https://streamlabs.com/pengulengu",
        "NOBODY CARES!!!! STREAKS NOW!!!"
      ];
      var min = 0;
      var max = fortunes.length - 1;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (message.content.endsWith('?')) {
        var embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setAuthor(`pengu's incredible and magical 9-ball`, "https://cdn.discordapp.com/attachments/428763604880457731/487763090306367498/9ball.png")
        .addField(`**Answer**`, fortunes[random], false)
        message.channel.send(embed)
      } else {
        let log = `Invalid 9ball Question`;
        message.reply('HELLO??? YOU DISGUSTING NIFAJIT!!! YOU NEED TO ASK SOMETHING!')
        .then(console.log(log))
        .catch(console.error);
        return log;
      }

    }
module.exports.help = {
    name: "9ball",
    description: "discount 8ball"
}