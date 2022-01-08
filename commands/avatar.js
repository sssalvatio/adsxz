const { description } = require("./ping");

module.exports = {
    name: 'avatar',
    description: 'for showing user avatar',
    aliases: 'av',
    execute(message, args, Discord){
        let user = message.mentions.users.first() 
        || message.guild.members.cache.get(args[0])?.user
        || message.author;
      
      let avatar = user.displayAvatarURL({size: 1024, dynamic: true})

       const newEmbed = new Discord.MessageEmbed()
        .setAuthor(avatar, message.username)
        .setTitle(`${user.tag} avatar`)
        .setImage(avatar)
        .setColor("#F7CAC9")
        .setAuthor(user.username, avatar, avatar)
        .setFooter(`Requested by ${message.author.tag}`).setTimestamp();

        message.channel.send(newEmbed)
    } 

}