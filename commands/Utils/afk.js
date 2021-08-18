const Afk = require('../../models/afk-schema')

module.exports = {
    name: 'afk', 
    aliases: 'af', 
    async execute (client, message, args, cmd, Discord)  {    
        let reason = args.join(" ");
        if(!reason) reason = "The user is on AFK"; 
        let afkProfile = await Afk.findOne({ userID: message.author.id}); 
        if (!afkProfile) {
            afkProfile = await new Afk({
                userID: message.author.id, 
                reason: reason, 
            }); 
            await afkProfile.save(); 
            message.channel.send(new Discord.MessageEmbed().setDescription('**You are now in AFK** <:Cookiechu:875018864403046450>').setColor('#e25800'));
        } else return message.channel.send(new Discord.MessageEmbed().setDescription('**You are aleady on AFK** <:Cookiechu:875018864403046450>').setColor('#e25800'));
    }
}
