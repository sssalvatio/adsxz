module.exports = {
    name: 'member',
    description: "this command is for counting how much member in the server",
    execute(message, args){
        message.reply(`There are ${message.guild.memberCount} members in the server`)
    }
}