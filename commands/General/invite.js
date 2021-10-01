
module.exports = {
  name: 'invite',
  description: 'inbite',
  execute(client, message, args, cmd, Discord) {
    message.delete()
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#dc85e2")
    .setTitle("Click here to Invite")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=893483868689162270&permissions=8&scope=bot")
    .setImage('https://media2.giphy.com/media/3DUoXzfUNybiU/giphy.gif')

    message.channel.send(newEmbed);
  }
  
}
