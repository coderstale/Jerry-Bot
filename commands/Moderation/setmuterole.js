const muteSchema = require('../../models/mute')

module.exports = {
  name: 'setmuterole',

  async execute(client, message, args) {
    const role = await message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if (!role) return message.channel.send(`Incorrect Usage.`)
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have permission to use this command")
    muteSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (err) throw err
      if (data) {
        message.channel.send(`Mute role for this server is already seted. Reset it to set it again`)
      } else {
        data = new muteSchema({
          Guild: message.guild.id,
          Role: role.id,
        })
        await data.save()
        message.channel.send(`**Mute role has been set-up!**`)
      }
    })
  }
}