module.exports = {
  name: 'kick',
  cooldown: 5,
  description: "This command kicks a member!",
  execute(client, message, args, cmd, Discord) {
    message.delete()
    if (!message.mentions.users.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('<:x_:876658908633137253> Too few arguments given.').setColor('#e25800').setAuthor(message.author.username).addFields(
      { name: "**Usage:**", value: "`kick <user>`" },
    ));
    
    
    
    if (!message.mentions.users.first().kickable) return message.channel.send(new Discord.MessageEmbed().setDescription('**Could not Kick this user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    
    
    
    
    
    
    
    
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to kick a user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.kick();
      message.channel.send(new Discord.MessageEmbed().setDescription('**User has been kicked** <:SamiDev:875019906876317746>').setColor('#e25800'));

    }
  }
}
