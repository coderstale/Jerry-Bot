// module.exports = {
//   name: 'unmute',
//   cooldown: 3,
//   description: "This unmutes a member",
//   execute(client, message, args, cmd, Discord) {
//     message.delete()
//     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to Unmute a user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
//     const target = message.mentions.users.first();
//     if (target) {
//       let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

//       let memberTarget = message.guild.members.cache.get(target.id);

//       memberTarget.roles.remove(muteRole.id);
//       message.channel.send(new Discord.MessageEmbed().setDescription(`<@${memberTarget.user.id}> **has been unmuted** <:SamiDev:875019906876317746>`).setColor('#e25800'));
//     } else {
//     const unmuteEmbed = new Discord.MessageEmbed()
//     .setColor("#e25800")
//     .setAuthor(message.author.username)
//     .setDescription("<:x_:876658908633137253> Too few arguments given.")
//     .addFields(
//       { name: "**Usage:**", value: "`unmute <user>`" },
//     )
//     message.channel.send(unmuteEmbed);
//     }
//   }
// }


require('discord-reply');
const { MessageEmbed } = require("discord.js");
const muteSchema = require('../../models/mute')

module.exports = {
  name: "unmute",
  category: "moderation",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to unmute anyone"
      );
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
    const member = message.mentions.members.first();
    if (!member) {
      return message.lineReply("Please mention the member to who you want to unmute");
    }
    muteSchema.findOne({ Guild: member.guild.id }, async (err, data) => {
      if (!data) return;
      if (data) {
        const role = member.guild.roles.cache.find(role => role.id == data.Role);
        if (!role) {
          return data.delete()
        }
        if (!role.id) {
          return message.lineReply("\```Muted role undetected, Please setup the mute role! More info on Config page (`>help`) \``` ");
        }
        await member.roles.remove(role.id);
      }
    });
    // client.modlogs({
    //   Member: member,
    //   Action: "Unmuted",
    //   Color: "GREEN",
    // },
    //   message
    // );
    const unmute = new MessageEmbed()
      .setTitle('<:SamiDev:875019906876317746>  Mute Removed').setColor('GREEN')
      .addFields(
        { name: `Unmuted :`, value: `${message.mentions.users.first()}`, inline: true },
      )
      .setTimestamp()
      .setFooter(message.author.tag,
        message.author.displayAvatarURL({ dynamic: true }))
    await message.lineReply(unmute);
  }
};