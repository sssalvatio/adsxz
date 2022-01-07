const { execute } = require("./ping");

module.exports = {
    name: 'help',
    description: 'A command that list all the command of this bot to make the user more easier for finding the command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F7CAC9')
        .setTitle('Himari Command List')
        .addFields(
            {name: 'abc', value: 'ping'},
            {name: 'abcd', value: '[ping](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'},
            {name: 'abce', value: 'ping'}

        )
        .setImage('https://i.pinimg.com/originals/f7/e2/19/f7e219edf9d6ea4d65532df9682457b0.jpg')
        .setFooter('PING PING PING HAHAHAHAHAHHAHA');

        message.channel.send(newEmbed);
    }
}

