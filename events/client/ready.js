module.exports = (Discord, client) =>{

    console.log('Its Kwikis Bday!');
   client.user.setPresence({
    status: `dnd`,
    activity: {
      name: `with Jakey`,
      type: `PLAYING`,
    }
  })

}
