module.exports = async (client) =>{
    const guild = client.guilds.cache.get('905479481211371540');
    setInterval(() =>{
        const memberCount = guild.memberCount
        const channel = guild.channels.cache.get('929297970543853578');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 60000);
}