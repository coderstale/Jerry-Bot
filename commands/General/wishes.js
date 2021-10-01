const discord = require('discord.js')
module.exports = {
  name: 'wishes',
  aliases: ['bday'],
  description: 'bday wishes command',
  execute(client, message, args, cmd, Discord) {
    const pingEmbed = new Discord.MessageEmbed()
    .setColor("#e071e0")
    .setTitle(`**It's your birthday, let's party! Cake - check. Candles - check. Drinks - check. Gift - check. Coolest birthday girl ever - check!**`)
    message.channel.send(pingEmbed); 

  }
}
