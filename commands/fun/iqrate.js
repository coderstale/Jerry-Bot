const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'iqrate',
  emoji: " ",
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  execute: async (client, message, args, cmd, Discord) => {
    let user = message.mentions.users.first() || message.author;
    const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    if (user == message.author) {
      const IQEmbed = new MessageEmbed()
        .setColor('#dc85e2')
        .setTitle('Your IQ Rate')
        .setDescription(`Your IQ is **${rate}** `)
        .setFooter(`${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
      message.channel.send(IQEmbed)
    } else {
      const IQEmbed2 = new MessageEmbed()
        .setColor('#e25800')
        .setTitle(`${user.username}'s IQ`)
        .setDescription(`${user} IQ is **${rate}** `)
        .setFooter(`${user.tag}`,
          user.displayAvatarURL({ dynamic: true })
        )
      message.channel.send(IQEmbed2)
    }

  }
}
