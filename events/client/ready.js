module.exports = (Discord, client) =>{

    console.log('Dracula is Alive!');
   client.user.setPresence({
    status: `dnd`,
    activity: {
      name: `Lurking | k!help`,
      type: `LISTENING`,
    }
  })

}
