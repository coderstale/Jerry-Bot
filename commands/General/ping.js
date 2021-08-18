const discord = require('discord.js')
module.exports = {
  name: 'ping',
  aliases: ['p'],
  description: 'ping command',
  execute(client, message, args, cmd, Discord) {
    const pingEmbed = new Discord.MessageEmbed()
    .setColor("#e25800")
    .setTitle(`**Pong!**  ${Date.now() - message.createdTimestamp}ms <:pong:874870879228678155>`)
    message.channel.send(pingEmbed); 

  }
}