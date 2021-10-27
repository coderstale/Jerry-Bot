const discord = require('discord.js')
module.exports = {
  name: 'ping',
  aliases: ['p'],
  description: 'ping command',
  execute(client, message, args, cmd, Discord) {
    const pingEmbed = new Discord.MessageEmbed()
    .setColor("#dc85e2")
    .setTitle(`**Pong!**  ${Date.now() - message.createdTimestamp}ms <a:luvforkwiki:902844090117402625>`)
    message.channel.send(pingEmbed); 

  }
}
