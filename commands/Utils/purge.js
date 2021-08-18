module.exports = {
  name: 'purge',
  cooldown: 5,
  description: "purge messages!",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**You do not have permissions to use this command!** <:Cookiechu:875018864403046450>');
    if (!args[0]) return message.reply('**Please mention the amount of messages to be purged!** <:FeelsDumbMan:875021020178841652>')
    if (isNaN(args[0])) message.reply('**Please enter a valid number!** <:FeelsDumbMan:875021020178841652>')

    if (args[0] > 100) return message.reply('**You can not delete messages above 100!** <:FeelsDumbMan:875021020178841652>')
    if (args[0] < 1) return message.reply('**You must delete minimum 1 Message!** <:FeelsDumbMan:875021020178841652>')

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages);
    });
  }
}