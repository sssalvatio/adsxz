const { User } = require("discord.js");
const { execute } = require("./ping");

module.exports = {
    name: 'help',
    description: 'A command that list all the command of this bot to make the user more easier for finding the command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F7CAC9')
        .setTitle('Himari Command List')
        .addFields(
            {name: 'ping', value: 'litteraly a ping command :V'},
            {name: 'member', value: '[to count how much member in this server, btw click me.](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'},
            {name: 'avatar', value: 'for stalking your crush pfp'}

        )
        
        .setImage('https://i.pinimg.com/originals/f7/e2/19/f7e219edf9d6ea4d65532df9682457b0.jpg')
        .setFooter(`Requested by ${message.author.tag}`).setTimestamp();

        message.channel.send(newEmbed);
    }
}

