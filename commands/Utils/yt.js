const ytsr = require('ytsr');
const Discord = require('discord.js');


module.exports = {
  name: 'youtube',
  cooldown: 15,
  aliases: ['yt'],
  description: "Search on YouTube",
  async execute(client, message, args, cmd, Discord) {
    const query = args.join(' ');
    if (!query) return message.channel.send("Provide a search for me to search YouTube!");

    const res = await ytsr(query).catch(e => {
      return message.channel.send("No results were found!");
    });

    const video = res.items.filter(i => i.type === 'video')[0];
    if (!video) return message.channel.send("No results were found!")

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTitle(video.title)
      .setDescription(`Video by - **${video.author.name}**`)
      .setURL(video.url)
      .setImage(video.bestThumbnail.url)
      .setColor("dc85e2")
      .setFooter(`Views : ${video.views.toLocaleString()} | duration : ${video.duration}`)

    message.channel.send(embed)

  }
}
