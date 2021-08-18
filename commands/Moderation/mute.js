// const ms = require('ms');
// module.exports = {
//   name: 'mute',
//   cooldown: 3,
//   description: "This mutes a member",
//   execute(client, message, args, cmd, Discord) {
//     message.delete()
//     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to Mute a user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
//     const target = message.mentions.users.first();
//     try {
//       if (target) {

//         let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

//         let memberTarget = message.guild.members.cache.get(target.id);

//         if (!args[1]) {
//           memberTarget.roles.add(muteRole.id);
//           message.channel.send(new Discord.MessageEmbed().setDescription(`<@${memberTarget.user.id}> **has been muted** <:SamiDev:875019906876317746>`).setColor('#e25800'));
//           return
//         }

//         memberTarget.roles.add(muteRole.id);
//         message.channel.send(new Discord.MessageEmbed().setDescription(`<@${memberTarget.user.id}> **has been muted for** ${ms(ms(args[1]))}<:SamiDev:875019906876317746>`).setColor('#e25800'));

//         setTimeout(function() {
//           memberTarget.roles.remove(muteRole.id);
//         }, ms(args[1]));
//       } else {
//     const muteEmbed = new Discord.MessageEmbed()
//     .setColor("#e25800")
//     .setAuthor(message.author.username)
//     .setDescription("<:x_:876658908633137253> Too few arguments given.")
//     .addFields(
//       { name: "**Usage:**", value: "`mute <user> [time: s/m/h/d]`" },
//     )
//     message.channel.send(muteEmbed);
//       }
//     } catch (err) {
//       console.log("Error in mute.js");
//       message.channel.send(new Discord.MessageEmbed().setDescription('```An Unexpected Error has accured!```').setColor('#e25800'));

//     }


//   }
// }


require('discord-reply');
const { MessageEmbed } = require("discord.js")
const muteSchema = require('../../models/mute')
module.exports = {
  name: "mute",
  async execute(client, message, args, cmd, Discord) {
    try{
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(new Discord.MessageEmbed().setDescription('**You do not have permissions to Mute a user!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    }
    const member = message.mentions.members.first();
    if (!member) {
      return message.channel.send(new Discord.MessageEmbed().setDescription('**Please mention someone to mute.** <:Cookiechu:875018864403046450>').setColor('#e25800'));;
    }
    if (member.id === message.author.id) {
      return message.channel.send(new Discord.MessageEmbed().setDescription('**no!** <:Cookiechu:875018864403046450>').setColor('#e25800'));;
    }
    const vrole = member.roles.cache
    let reason = args.slice(1).join(" " || 'No reason given');
    muteSchema.findOne({ Guild: member.guild.id }, async (err, data) => {
      if (!data) return;
      if (data) {
        const role = member.guild.roles.cache.find(role => role.id == data.Role);
        if (!role) {
          return data.delete()
        }
        if (!role.id) {
          return message.lineReply(new Discord.MessageEmbed().setDescription('**Muted role not assigned, please use j!setmuterole <role_id> to assign.** <:Cookiechu:875018864403046450>').setColor('#e25800'));
        }
        await member.roles.add(role.id);
      }
    });
    await member.roles.remove(vrole);
    // client.modlogs({
    //   Member: member,
    //   Action: "Muted",
    //   Color: "RED",
    //   Reason: reason
    // },
    //   message
    // );
    const mute = new MessageEmbed()
      .setTitle('<:SamiDev:875019906876317746>  Mute Added').setColor('GREEN')
      .addFields(
        { name: `Muted :`, value: `${message.mentions.users.first()}`, inline: true },
        { name: `Reason :`, value: `${reason}`, inline: true },
      )
      .setTimestamp()
      .setFooter(message.author.tag,
        message.author.displayAvatarURL({ dynamic: true }))
    await message.channel.send(mute);
    } catch(err){
      message.reply(new Discord.MessageEmbed().setDescription('```an Unexpected error has accured.```').setColor('#e25800'));
    }
  }
};