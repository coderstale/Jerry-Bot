const mongoose = require('mongoose');
const db = require('../../models/afk-schema')
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const cooldowns = new Map();
module.exports = async (Discord, client, message) => {
  
  const prefix = require("../../config.json").prefix;
  

  //---------------------------------------------------------------------------------------------------------------------------------------------------------

  client.on('message', async(message) => {
  if(message.author.bot) return;
  db.findOne({ Guild: message.guild.id, Member: message.author.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
      data.delete()
      const afk = new MessageEmbed()
      .setTitle('Afk Removed')
      .setDescription(`${message.author.tag} afk has been removed`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      
      return message.channel.send(afk)
      data.save()
    } else return;
  })
  
  if(message.mentions.members.first()) {
    db.findOne({ Guild: message.guild.id, Member: message.mentions.members.first().id }, async(err, data) => {
      if(err) throw err;
      if(data) {
        const member = message.guild.members.cache.get(data.Member);
        const afk2 = new MessageEmbed()
        .setTitle(`${member.user.tag} is Afk`)
        .setDescription(`${data.Content} - ${moment(parseInt(data.TimeAgo)).fromNow()}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        
        return message.channel.send(afk2)
        data.save()
      } else return;
    })
  }
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   if (await Afk.findOne({ userID: message.author.id })) {
//     let afkProfile = await Afk.findOne({ userID: message.author.id });
//     if (afkProfile.messageLeft == 1) {
//       await Afk.findOneAndDelete({ userID: message.author.id });
//       message.channel.send(new Discord.MessageEmbed().setDescription('**Your AFK is now Removed!** <:Cookiechu:875018864403046450>').setColor('#e25800'));
//     } else {
//       await Afk.findOneAndUpdate({ userID: message.author.id }, { messageLeft: afkProfile.messageLeft - 1 });
//     }

//   }

//   if (message.mentions.members.first()) {
//     await message.mentions.members.forEach(async member => {
//       let afkProfile = await Afk.findOne({ userID: member.user.id })
//       if (afkProfile) message.channel.send(new Discord.MessageEmbed().setDescription(`**${member.user.tag}**, is currently in AFK: **${afkProfile.reason}**`).setColor('#e25800'));
//     })
//   } //(new Discord.MessageEmbed().setDescription(`**${member.user.tag}**, is currently in AFK: **${afkProfile.reason}**`).setColor('#e25800'));
  //---------------------------------------------------------------------------------------------------------------------------------------------------------
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase()

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  try {
    if (message.channel.type == "dm") return;
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if (time_stamps.has(message.author.id)) {
      const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

      if (current_time < expiration_time) {
        const time_left = (expiration_time - current_time) / 1000;

        return message.reply(`*Please wait* ***${time_left.toFixed(1)}*** *more* ***seconds*** *before using* ***${command.name}*** <:stop:875640302684229642>`);
      }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
  } catch (err) {
    console.log("There was an error in message.js")
  };
  try {
    command.execute(client, message, args, cmd, Discord);
  } catch (err) {
    message.reply("**The command does not exsist!**");
  }

}

