const mongoose = require('mongoose');
const Guild = require('../../models/prefixmodel')

module.exports = {
  name: 'set-prefix',
  async execute(client, message, args, cmd, Discord) {
    let guildProfile = await Guild.findOne({ guildID: message.guild.id });
    // if (!guildProfile) {
    //     guildProfile = await new Guild({
    //         _id: mongoose.Types.ObjectId(),
    //         guildID: message.guild.id
    //     }); 
    //     await guildProfile.save().catch(err => console.log(err)); 
    // }
    if (!args.length) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}'s settings - `)
        .setDescription('The area would be blank if there is no custom prefix assigned. Prefix\nProperties: prefix, ')
        .setColor("RANDOM");

      if (guildProfile.prefix) embed.addField(`Prefix:`, guildProfile.prefix);
      message.channel.send(embed);
    } else {
      if (!["prefix"].includes(args[0])) return message.channel.send('You need to type a new prefix!!');
      if (!args[1]) return message.channel.send('Enter the new prefix bruh!');
      if ("prefix" === args[0]) {
        await Guild.findOneAndUpdate({ guildID: message.guild.id }, { prefix: args[1], lastEdited: Date.now() });
        message.channel.send(`Updated the prefix from ${args[0]} to ${args[1]}`);
      }
    }
  },
};
