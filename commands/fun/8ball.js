const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: ['8b'],
  execute: async (client, message, args, cmd, Discord) => {
    if (!args[1])
      return message.channel.send(
        `**no question was provided**`,
      );
    let replies = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Fuhgeddaboudit.',
    'Ahaha! Really?!?',
    'Pfft.',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    ];

    let result = Math.floor(Math.random() * replies.length);
    let question = args.join(" ");

    let embed = new MessageEmbed()

      .setColor("#e25800")
      .addField(`**${message.author.username}'s question**`, question)
      .addField('**the 8ball says**', replies[result])
      .setThumbnail(message.author.displayAvatarURL())

    message.channel.send(embed);
  },
};
