const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'simprate',

    execute: async(client, message, args, cmd, Discord) => {
        let user = message.mentions.users.first() || message.author;
        const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        if(user == message.author) {
            const Embed1 = new MessageEmbed()
            .setDescription(`You are **${rate}**% simp `)
            .setFooter(`${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(Embed1)

        } else {
            const Embed2 = new MessageEmbed()
            .setDescription(`${user} is ${rate}% simp `)
            .setColor('#dc85e2')
            .setFooter(`${user.tag}`,
            user.displayAvatarURL({ dynamic: true })
            )
            message.channel.send(Embed2)
        }
    }
}
