
module.exports = {
  name: 'invite',
  description: 'inbite',
  execute(client, message, args, cmd, Discord) {
    message.delete()
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#e25800")
    .setTitle("Click here to Invite")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=873412136578211840&permissions=8&scope=bot")
    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevLaFkxzeLI8JQmOYdZYNToiXmmLahWWj4A&usqp=CAU')

    message.channel.send(newEmbed);
  }
  
}
