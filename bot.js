

// initial
const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const prefix = botconfig.prefix
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir('./commands/fun/', (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('no commands avilable');
        return;
    }

    jsfile.forEach((f, i) => {
            let props = require(`./commands/fun/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
    });
});

fs.readdir('./commands/utility/', (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('no commands avilable');
        return;
    }

    jsfile.forEach((f, i) => {
            let props = require(`./commands/utility/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
    });
});

fs.readdir('./commands/moderation/', (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('no commands avilable');
        return;
    }

    jsfile.forEach((f, i) => {
            let props = require(`./commands/moderation/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
    });
});




// startup, server and member count

bot.on('ready', () => {
    console.log(`the party has started!!! (with a total of ${bot.users.size} users, in ${bot.guilds.size} servers!)`);
    bot.user.setActivity(`-help | geometrash on ${bot.guilds.size} servers!`,{type: `PLAYING`})
    .then(console.log(`setActivity was successful, now playing ${bot.user.presence.game.name}`))
    .catch(console.error);
});

// other stuff

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
})


// me
const birthday_boy = "156526517675884545"


bot.login(process.env.BOT_TOKEN)
