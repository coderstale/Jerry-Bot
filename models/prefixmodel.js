const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
    guildID: String,
    lastEdited: String,  
    prefix: { type: String, default: "crn!" },
  });
  
  module.exports = new mongoose.model('Guild', guildSchema, 'guilds');
