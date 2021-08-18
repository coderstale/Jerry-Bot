module.exports = {
  name: 'lockdown',
  aliases: ['ld', 'lock'],
  description: 'lockdown command',
  execute(client, message, args, cmd, Discord){
    message.delete()
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to use this command!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
     message.channel.send(new Discord.MessageEmbed().setDescription('**This Channel is now under Lockdown!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
  }
}

// 