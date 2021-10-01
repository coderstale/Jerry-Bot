const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect("mongodb+srv://coderstale:Thejoy@2929@jerry.emhgt.mongodb.net/Data",{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=>{
  console.log("Connected to MongoDB!")
}).catch((err)=> {
  console.log("Error in index.js mongo db!")
});

client.login("ODkzNDgzODY4Njg5MTYyMjcw.YVcHsg.hH83HRmvD4P5aMpqarlc34h9ptQ");
