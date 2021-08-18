// const Afk = require('../../models/afk-schema')

// module.exports = {
//     name: 'afk', 
//     aliases: 'af', 
//     async execute (client, message, args, cmd, Discord)  {    
//         let reason = args.join(" ");
//         if(!reason) reason = "The user is on AFK"; 
//         let afkProfile = await Afk.findOne({ userID: message.author.id}); 
//         if (!afkProfile) {
//             afkProfile = await new Afk({
//                 userID: message.author.id, 
//                 reason: reason, 
//             }); 
//             await afkProfile.save(); 
//             message.channel.send(new Discord.MessageEmbed().setDescription(`*You are now in AFK:* ***${afkProfile.reason}***`).setColor('#e25800'));
//         } else return message.channel.send(new Discord.MessageEmbed().setDescription('**You are aleady on AFK** <:Cookiechu:875018864403046450>').setColor('#e25800'));
//     }
// } //(new Discord.MessageEmbed().setDescription(`*You are now in AFK:* ***${afkProfile.reason}***`).setColor('#e25800'));




const { MessageEmbed } = require('discord.js');
const db = require('../../models/afk-schema');

module.exports = {
  name: 'afk',
  execute: async(client, message, args, cmd, Discord) => {
    const afkreason = args.slice(0).join(' ') || 'No reason';
    db.findOne({ Guild: message.guild.id, Member: message.author.id }, async(err, data) => {
      if(data) {
        return;
      } else {
        Data = new db({
          Guild: message.guild.id,
          Member: message.author.id,
          Content: afkreason,
          TimeAgo: Date.now()
        })
        Data.save()
        const afksave = new MessageEmbed()
        .setTitle(`${message.author.tag} is now afk`)
        .setDescription(afkreason)
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        
        message.channel.send(afksave)
      }
    })
  }
}
