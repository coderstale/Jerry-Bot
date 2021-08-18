module.exports = {
  name: 'unlock',
  aliases: ['ul', 'unk'],
  description: 'lockdown command',
  execute(client, message, args, cmd, Discord){
    message.delete()
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to use this command!** <:Cookiechu:875018864403046450>').setColor('#e25800'));

    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
    message.channel.send(new Discord.MessageEmbed().setDescription('**This Channel is now Un-Locked!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
  }
}

// VIEW_CHANNEL: false, 