const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "howgay",
  category: "fun",
  aliases: [],
  description: "Show How Gay Member Is!",
  usage: "Howgay <Mention Member>",
  execute: async (client, message, args, cmd, Discord) => {
    //Start
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(`#dc85e2`)
      .setTitle(`Gay v8 Machine`)
      .setDescription(`${Member.user.username} is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
