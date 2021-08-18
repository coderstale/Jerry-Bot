// const Discord = require('discord.js');
// const config = require('../../config.json');

// module.exports = {
//     name: "avatar",

//     aliases: ["av", "pfp"],
//     description: "Gets the avatar of the mentioned user",

//     execute: async (client, message, args, cmd, Discord) => {
//       const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      
//       const embed = new Discord.MessageEmbed()
//       .setTitle(`${member.displayName}'s Avatar`)
//       .setImage(member.user.displayAvatarURL({ dynamic: true, size:  1024 }))
//       .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
//       .setTimestamp()
//       .setColor("#e25800");
//     message.channel.send(embed);
//   }
// }


const { MessageEmbed } = require("discord.js");
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "avatar",
    aliases: ['pic', 'pfp', 'av'],
    usages: `${prefix}avatar/av/pic/pfp [@user]\n\n${prefix}avatar/av/pic/pfp [id]\n\n${prefix}avatar/av/pic/pfp`,
    requirements: "BOT: `SEND_MESSAGES`",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    execute: async(client, message, args, cmd, Discord) => {

        const target = message.mentions.users.first()
        const color = "#e25800";

        if((message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) || 
        (message.guild.me.hasPermission("ADMINISTRATOR"))) {
            
            if(args[0]) {

                if(target) {

                    if((args[0].startsWith("<@!")) && 
                            (args[0].endsWith(">")) && 
                            (args[0].length == 22) && 
                            (!isNaN(args[0].slice(3, 21)))) {

                                const userID2 = args[0].slice(3, 21);

                                client.users.fetch(userID2).then(async(user) => {
                                    message.channel.send(new MessageEmbed()
                                    .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color));
            
                                }).catch(() => {
                                    return message.channel.send(new MessageEmbed()
                                    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color))
                                });

                            } else if((args[0].startsWith("<@")) && 
                            (args[0].endsWith(">")) && 
                            (args[0].length == 21) && 
                            (!isNaN(args[0].slice(2, 20)))) {

                                const userID1 = args[0].slice(2, 20);

                                client.users.fetch(userID1).then(async(user) => {
                                    message.channel.send(new MessageEmbed()
                                    .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color));
            
                                }).catch(() => {
                                    return message.channel.send(new MessageEmbed()
                                    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color))
                                });

                            } else {
                                return message.channel.send(new MessageEmbed()
                                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                                .setTitle("Avatar")
                                .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                                .setColor(color));
                            };

                } else {

                    if((args[0].startsWith("<@!")) && 
                            (args[0].endsWith(">")) && 
                            (args[0].length == 22) && 
                            (!isNaN(args[0].slice(3, 21)))) {

                                const userID2 = args[0].slice(3, 21);

                                client.users.fetch(userID2).then(async(user) => {
                                    message.channel.send(new MessageEmbed()
                                    .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color));
            
                                }).catch(() => {
                                    return message.channel.send(new MessageEmbed()
                                    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTitle("Avatar")
                                    .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                                    .setColor(color))
                                });

                                
                            } else if((!isNaN(args[0])) && 
                (args[0].length == 18)) {
                    
                    let userID = args[0];
                    
                    client.users.fetch(userID).then(async(user) => {
                        message.channel.send(new MessageEmbed()
                        .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
                        .setTitle("Avatar")
                        .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
                        .setColor(color));

                    }).catch(() => {
                        return message.channel.send(new MessageEmbed()
                        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setTitle("Avatar")
                        .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                        .setColor(color));
                    })

                }
            }
            } else {
                return message.channel.send(new MessageEmbed()
                        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setTitle("Avatar")
                        .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                        .setColor(color));
            }

        } else {
            console.log(`\n\nUnable to run:\nCommand: AVATAR\nGuild Name: ${message.guild.name}\nGuild ID: ${message.guild.id}\nChannel Name: ${message.channel.name}\nChannel ID: ${message.channel.id}\nReason: MISSING_PERMISSIONS`)
        };

    },
};

