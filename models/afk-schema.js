// const mongoose = require('mongoose'); 

// const afkSchema = new mongoose.Schema({
//     userID: String, 
//     reason: String, 
//     messageLeft: { type: Number, default: 1}
// }); 

// module.exports = new mongoose.model("Afk", afkSchema, 'afks'); 

const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
  Guild: String,
  Member: String,
  Content: String,
  TimeAgo: String
})

module.exports = mongoose.model('afk', Schema)
