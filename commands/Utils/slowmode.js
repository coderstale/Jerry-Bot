const Discord = require('discord.js');
module.exports = {
  name: 'slowmode',
  cooldown: 2,
  description: 'Sets SlowMode for a Channel',
  async execute(client, message, args, cmd, Discord) {
    message.delete()
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      messages.channel.send(new Discord.MessageEmbed().setDescription('You Cannot do that, Missing Permissions').setColor('#dc85e2'))
      return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('Invalid Args: What do you want the slowmode to be set to?').setColor('#dc85e2'));
    if (isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setDescription('Please type a real number!').setColor('#dc85e2'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed().setDescription('Number must be between 1 - 21600').setColor('#dc85e2'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

    channel.setRateLimitPerUser(args[0])
    message.channel.send(new Discord.MessageEmbed().setDescription(`Slow Mode set to ${args[0]}`).setColor('#dc85e2'))
    return;

    message.channel.send(new Discord.MessageEmbed().setDescription(`Slow Mode set to ${args[0]}`).setColor('#dc85e2'))

      .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
      })
  }
}
