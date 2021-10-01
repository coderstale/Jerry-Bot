
module.exports = {
  name: 'invite',
  description: 'inbite',
  execute(client, message, args, cmd, Discord) {
    message.delete()
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#dc85e2")
    .setTitle("Click here to Invite")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=893483868689162270&permissions=8&scope=bot")
    .setImage('https://www.wallpapers13.com/wp-content/uploads/2016/11/Tom-and-Jerry-Tasty-sandwich-for-Tom-HD-Wallpaper-for-laptop-and-tablet-1920x1200-1366x768.jpg')

    message.channel.send(newEmbed);
  }
  
}
