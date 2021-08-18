module.exports = {
  name: 'ban',
  cooldown: 5,
  description: "This command bans a member!",
  execute(client, message, args, cmd, Discord) {
    message.delete()
    if (!message.mentions.users.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('<:x_:876658908633137253> Too few arguments given.').setColor('#e25800').setAuthor(message.author.username).addFields(
      { name: "**Usage:**", value: "`ban <user>`" },
    ));
    
    
    
    if (!message.mentions.users.first().bannable) return message.channel.send(new Discord.MessageEmbed().setDescription('**Could not Ban this user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to Ban a user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      const newEmbed = new Discord.MessageEmbed()
        .setColor("#e25800")
        .setTitle("**User has been banned!** <:SamiDev:875019906876317746>")
      message.channel.send(newEmbed);
    }
  }

}

