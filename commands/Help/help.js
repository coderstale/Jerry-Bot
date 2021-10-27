module.exports = {
  name: 'help',
  description: "commands list",
  execute(client, message, args, cmd, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#dc85e2')
      .setAuthor(message.author.username)
      .setTitle('__**Help**__ <a:cuteumb:902845972831432704>')
      .addFields(
        { name: '**General Commands:**', value: '`invite` | `ping` |' },
        { name: '**Fun Commands:**', value: '`8ball` | `hack` | `howgay` | `iqrate` | `kiss` | `simprate` |'},
        { name: '**Moderation Commands:**', value: '`ban` | `kick` | `mute` | `unmute` |' },
        { name: '**Utility Commands:**', value: '`avatar` | `purge` | `remind` | `serverinfo` |`slowmode` | `yt` | `lock` | `unlock` | `servericon` | `afk` |' },
        { name: '\u200b', value: 'bot made by t0m.' }
      )

    message.author.send(newEmbed)


    message.channel.send(new Discord.MessageEmbed().setDescription('**Check DMs for Help.** <a:cuteumb:902845972831432704>').setColor('#dc85e2'));

}
}
