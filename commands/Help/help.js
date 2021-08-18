module.exports = {
  name: 'help',
  description: "commands list",
  execute(client, message, args, cmd, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#e25800')
      .setAuthor(message.author.username)
      .setTitle('__**Help**__ <:Cookiechu:875018864403046450>')
      .addFields(
        { name: '**General Commands:**', value: '`invite` | `ping`' },
        { name: '**Fun Commands:**', value: '`8ball` | `hack` | `howgay` | `iqrate` | `kiss` | `simprate`'},
        { name: '**Moderation Commands:**', value: '`ban` | `kick` | `mute` | `unmute`' },
        { name: '**Utility Commands:**', value: '`avatar` | `purge` | `remind` | `serverinfo` |`slowmode` | `yt` | `lock` | `unlock` | `servericon`' },
        { name: '\u200b', value: 'bot made by ᗪᖇᗩᑕᑌᒪᗩ#0458' }
      )

    message.author.send(newEmbed)


    message.channel.send(new Discord.MessageEmbed().setDescription('**Check DMs for Help.** <:Cookiechu:875018864403046450>').setColor('#e25800'));

}
}
