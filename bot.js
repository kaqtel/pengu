const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const PREFIX = ""



var fortunes = [
  "JUST BUY AN 8BALL YOURSELF CHEAP KID",
  "ILL TELL YOU ONCE I GET MY VBUCKS NOW!!!!",
  "NOBODY CARES!!!! PUNBG NJIOW!!!!!!",
  "UR DEIFNTLY A MINON FAN",
  "WJAHT DO YIU M EAMN???? UDIOPATE 2.2 ISK NEVER COMNING OUT!!!!!!!!!!!",
  "WHO ARE YOU TRYING TOI SCAM????",
  "NOVBDY CAFRES!!!! IM BACK!!!!!!!",
  "🎁🎁🎁 Gift for my Subscribers Click Here: ⬇⬇⬇ http://us.baptizing868hd.top/amazongo/index_h.html?model=iPhone&brand=Apple&osversion=IOS%2011.3&ip=166.137.252.60&city=New%20York&voluumdata=deprecated&eda=deprecated&cep=0oWLKQbS1T9RixRYjRRtbsr3N5-1a30Z2c8aBHX2WbN9ufu1fkikKwGQeGMTRXJ7YXzTdqOGK4Hs25CoEDk8JAv6uWoKjiD-e5hHZ3uxJ9ydx3yxO-Mhzuq7taZIvzJDOD2HN1LaD44qfBdLN5RZaWAbwBiPzMuU5Ag1Iljzk6428Bn6ZIghu7Kw15RuFsRyrSPF1_-m8wQT-3V3RyayGWWnurVDvRuUVq5bZcuDtrncJGV6iOm9jJDIPBkaU-QCmNegyZ2nlP89vOCnlaGARqQDdcQM7qzjwBjfZEUh8YrLrcAbnVWtE7vgiKCL3RwhVm2RchOgW83MKSdZGBaOVwBShqAAaMhKT3YIYeTjMPHmfHmxZuEDJD5fdzT4dw3D&clickid=aeeae6c572a79a17f6d613a6cf46eadd&channel_id=justflipacoin.com_119450&rtb_source=A4g_sunny0507_pp_ios&campaign_id=4585041&sizeid=32050&mediaid=pulsepoint"
]

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });
}

var servers = {};

// status

bot.on("ready", () => {
  console.log(`${bot.users.size} users, in ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`Geometry Dash in ${bot.guilds.size} servers!`);
});

// join



// commands

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.send(`Pong! \`${bot.ping}ms\``);
      break;
    case "info":
      message.channel.send("embed wip");
      break;
    case "8ball":
      if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.send("HELLO??? YOU NEED TO ASK SOMETHING DUMBASS");
      break;

    }

});

  // purge


// trash commands

bot.on("message", (message) => {
  if(message.content === "PEW") {
    message.channel.send("POW");
  }
  if(message.content === "HELLO???") {
    message.channel.send("IM BACK!!!");
  }
  if(message.content === "HEY ARE YOU KIDDING ME???") {
    message.channel.send("PLEASE CLOSES YOUR MOUTH!!!");
  }
  if(message.content === "Master has ligma...") {
    message.channel.send("His life was cut short, just before his basketball game against Lincoln Logs.");
  }

});


bot.login(process.env.BOT_TOKEN)
