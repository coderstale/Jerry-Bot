const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect("Nothing here Idiot!",{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=>{
  console.log("Connected to MongoDB!")
}).catch((err)=> {
  console.log("Error in index.js mongo db!")
});

client.login("OTQzMDM5MzU3MzU3NTU1NzQy.G-zOnR.A2qlSmD7KINYPsFGAFb1LELKtg11vXPogUeCLE");
