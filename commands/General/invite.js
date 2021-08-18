
module.exports = {
  name: 'invite',
  description: 'inbite',
  execute(client, message, args, cmd, Discord) {
    message.delete()
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#e25800")
    .setTitle("Click here to Invite")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=873412136578211840&permissions=8&scope=bot")
    .setImage('https://www.hdwallpapersfreedownload.com/uploads/large/cartoons/cartoons-wallpaper-tom-and-jerry.jpg')

    message.channel.send(newEmbed);
  }
  
}