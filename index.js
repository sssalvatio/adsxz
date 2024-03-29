const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
require("dotenv").config();
const{MessageEmbed} = require('discord.js');

const memberCounter = require('./counters/member-counter');

const log = console.log

const prefix = process.env.PREFIX;
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log(chalk.blue('=-()-=-=()=--=()=--=()=--=()=--=()=-()-=-=()=--=()=--=()=--=()=--=()'))
    console.log(chalk.magenta(`Client is Online. Loggined as ${client.user.tag}`))
    memberCounter(client)
    console.log(chalk.red('=-()-=-=()=--=()=--=()=--=()=--=()=-()-=-=()=--=()=--=()=--=()=--=()'))
    console.log()
});
 
client.on('ready', activity => {
    client.user.setStatus(`idle`)
    client.user.setActivity(
      `Your Server's | ~Help`, {
        type: 'WATCHING'
      }
    )
  });


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        
        client.commands.get('ping').execute(message, args);
    } else if(command === 'help'){

        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'member'){
      
      client.commands.get('member').execute(message, args);
    } else if(command === 'avatar'){

      client.commands.get('avatar').execute(message, args, Discord)
    }
});


 
client.login(process.env.DISCORD_TOKEN);
