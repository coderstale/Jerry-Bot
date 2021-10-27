module.exports = {
  name: 'ban',
  aliases: ['bun'],
  cooldown: 5,
  description: "This command bans a member!",
  execute(client, message, args, cmd, Discord) {
    message.delete()
    if (!message.mentions.users.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('<:x_:876658908633137253> Too few arguments given.').setColor('#dc85e2').setAuthor(message.author.username).addFields(
      { name: "**Usage:**", value: "`ban <user>`" },
    ));
    
    
    
    if (!message.mentions.users.first().bannable) return message.channel.send(new Discord.MessageEmbed().setDescription('**Could not Ban this user!** <:thunkthunkkwiki:902845201415036938>').setColor('#dc85e2'));
    

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to Ban a user!** <:thunkthunkkwiki:902845201415036938>').setColor('#dc85e2'));
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      const newEmbed = new Discord.MessageEmbed()
        .setColor("#dc85e2")
        .setTitle("**User has been banned!** <a:sedlyfe:902846910090579980>")
      message.channel.send(newEmbed);
    }
  }

}

