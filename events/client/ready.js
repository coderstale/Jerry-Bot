module.exports = (Discord, client) =>{

    console.log('Its Kwikis Bday!');
   client.user.setPresence({
    status: `dnd`,
    activity: {
      name: `Lurking | k!help`,
      type: `LISTENING`,
    }
  })

}
