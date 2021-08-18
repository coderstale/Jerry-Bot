const mongoose = require('mongoose'); 

const afkSchema = new mongoose.Schema({
    userID: String, 
    reason: String, 
    messageLeft: { type: Number, default: 1}
}); 

module.exports = new mongoose.model("Afk", afkSchema, 'afks'); 
