const Math = require("mathjs");
const { MessageEmbed } = require("discord.js");
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "kiss",
    usages: `${prefix}kiss [@user]`,
    requirements: "BOT: `SEND_MESSAGES`",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    execute: async(client, message, args, cmd, Discord) => {

        const target = message.mentions.users.first();
        const color = "#dc85e2";
        if(!target){
      return message.reply("**Who Will U Kiss?** 💗")
    }

        needs = [
            "https://media1.tenor.com/images/72bfd912fa78d4ea2337c8b62ab3e899/tenor.gif?itemid=10989969",
            "https://media1.tenor.com/images/d21356553d5ac843bedb5cc1a3971da4/tenor.gif?itemid=13337668",
            "https://media1.tenor.com/images/74e1894ce5b90c47d54896d3c657d143/tenor.gif?itemid=17686659"
        ];
        
        images = [
            "https://media1.tenor.com/images/afde656c2606a4433d7aee2938b5eaba/tenor.gif?itemid=20604037",
            "https://media1.tenor.com/images/927dab824595fe53c13b27767fc7a9c1/tenor.gif?itemid=22036831",
            "https://media1.tenor.com/images/24e07b779d9ddf35666957c8541f3836/tenor.gif?itemid=22051950",
            "https://media1.tenor.com/images/434e5476a768cf11c08b12e8cd745dd5/tenor.gif?itemid=20917519",
            "https://media1.tenor.com/images/e4e1b04ecb802a8d83b140985598b19d/tenor.gif?itemid=18484348",
            "https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412",
            "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
            "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
            "https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409",
            "https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722",
            "https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618",
            "https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif?itemid=4829336",
            "https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657",
            "https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649",
            "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314",
            "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
            "https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106",
            "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192",
            "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
            "https://media1.tenor.com/images/b8d0152fbe9ecc061f9ad7ff74533396/tenor.gif?itemid=5372258",
            "https://media1.tenor.com/images/4b56464510f4c9cfbec9eda5a25c3a72/tenor.gif?itemid=17193768",
            "https://media1.tenor.com/images/626cb1e13142bce7f228ab8e30e2519c/tenor.gif?itemid=16896135",
            "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177",
            "https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425",
            "https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489",
            "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376",
            "https://media1.tenor.com/images/4c66d14c58838d05376b5d2712655d91/tenor.gif?itemid=15009390",
            "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
            "https://media1.tenor.com/images/230e9fd40cd15e3f27fc891bac04248e/tenor.gif?itemid=14751754",
            "https://media1.tenor.com/images/105a7ad7edbe74e5ca834348025cc650/tenor.gif?itemid=9158317",
            "https://media1.tenor.com/images/e6ef659224d7fb9c69c0f675146e8c93/tenor.gif?itemid=17845598",
            "https://media1.tenor.com/images/25f303ad959848d865a25368316328f3/tenor.gif?itemid=19656137",
            "https://media1.tenor.com/images/a04bb47093b03da2bae98bf248b09dcc/tenor.gif?itemid=21422425",
            "https://media1.tenor.com/images/7206ac24b2d837f5b84c59d96bcc1c08/tenor.gif?itemid=17177351",
            "https://media1.tenor.com/images/fb860d817fbcf9e3b4d05a46470150af/tenor.gif?itemid=17421830",
            "https://media1.tenor.com/images/059dc2ecac1c7ca6966ae433d78b1466/tenor.gif?itemid=18710804",
            "https://media1.tenor.com/images/f34f73decaef049f9354b27984dfb09c/tenor.gif?itemid=14958166",
            "https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552",
            "https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif?itemid=12879850",
            "https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif?itemid=13344389",
            "https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif?itemid=5448064",
            "https://media1.tenor.com/images/227aa4313c6c4d4e2091148f4fa37645/tenor.gif?itemid=13975815",
            "https://media1.tenor.com/images/d7bddc2032a53da99f9a3e5bfadf3cf2/tenor.gif?itemid=17708192",
            "https://media1.tenor.com/images/56dc4747dc2943f492a7d115f67f37a4/tenor.gif?itemid=12129460",
            "https://media1.tenor.com/images/5fa563d322cf9c11e06a2d6f79661085/tenor.gif?itemid=18441135",
            "https://media1.tenor.com/images/acc4c47528de1f3e1c8440c9a7fee2a9/tenor.gif?itemid=19635741",
            "https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif?itemid=14816388",
            "https://media1.tenor.com/images/37633f0b8d39daf70a50f69293e303fc/tenor.gif?itemid=13344412",
            "https://media1.tenor.com/images/49304ecdf46e62f340d1b790734f37c9/tenor.gif?itemid=12982889",
            "https://media1.tenor.com/images/d93c9a9c201ec1fe3c8011718b18a83c/tenor.gif?itemid=16317577",
            "https://media1.tenor.com/images/3deb7cd6c872b3774485ae2b3b2f657c/tenor.gif?itemid=13907866",
            "https://media1.tenor.com/images/6b5e44911c0b3dda5b18a0c142119c20/tenor.gif?itemid=15974229",
            "https://media1.tenor.com/images/7c5f377ddb8e72d24c5c8a8941b08896/tenor.gif?itemid=5409747",
            "https://media1.tenor.com/images/e0e9834936c476d01a27da45fabf6239/tenor.gif?itemid=6096989",
            "https://media1.tenor.com/images/af1216d35f8ec076b593401b19ddd0bf/tenor.gif?itemid=13188942",
            "https://media1.tenor.com/images/0467241bc889c900874cc276aca20c33/tenor.gif?itemid=7492021",
            "https://media1.tenor.com/images/32d4f0642ebb373e3eb072b2b91e6064/tenor.gif?itemid=15150255",
            "https://media1.tenor.com/images/d5a3f43f9b2ed8900834607d59916a9c/tenor.gif?itemid=13516822",
            "https://media1.tenor.com/images/aefab5761ce508eef8acb3fdd09aa3b3/tenor.gif?itemid=6203343",
            "https://media1.tenor.com/images/fba65aad7517bcc73925df830bc36921/tenor.gif?itemid=19522052",
            "https://media1.tenor.com/images/fc16163cc510879347264875e8c04a39/tenor.gif?itemid=17077533",
            "https://media1.tenor.com/images/336dc40878da57e5334ef3e2df0c7701/tenor.gif?itemid=13598021",
            "https://media1.tenor.com/images/4fd3e2498aab52d27802d5f1bab39807/tenor.gif?itemid=17870177",
            "https://media1.tenor.com/images/ba6d2edde20b579e6dcf09f9123beeae/tenor.gif?itemid=14835548",
            "https://media1.tenor.com/images/c7b9113ac0c696a603f03ede82f5a4c2/tenor.gif?itemid=16896335",
            "https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557",
            "https://media1.tenor.com/images/58e8a1cc917ee23ccdeba0fd253a3ea3/tenor.gif?itemid=11792978",
            "https://media1.tenor.com/images/ae23f5bc7f586b9a11cab898bf02d1be/tenor.gif?itemid=17708193",
            "https://media1.tenor.com/images/c4878b4a83169cdc2ce8c1eb08e23394/tenor.gif?itemid=10356310",
            "https://media1.tenor.com/images/2ad6f58cb4b4662b2333e80419624f8e/tenor.gif?itemid=14481243",
            "https://media1.tenor.com/images/b5109a90cc400e53526bfd0917194cf6/tenor.gif?itemid=15979384",
            "https://media1.tenor.com/images/d9115cb8f24162cf70428d8cb8d96558/tenor.gif?itemid=9382690",
            "https://media1.tenor.com/images/37889be53ab8bee0bb9cb38a333fbf3e/tenor.gif?itemid=14375361",
            "https://media1.tenor.com/images/0d70e1c91378712021717d2f6424fd07/tenor.gif?itemid=14375357",
            "https://media1.tenor.com/images/7e894fcb897cf0a388b5c41051b5b949/tenor.gif?itemid=11743156",
            "https://media1.tenor.com/images/1a124a8291930684139a85f22158ce54/tenor.gif?itemid=15924413",
            "https://media1.tenor.com/images/be8014584d3ed6e29b43a2044503b90b/tenor.gif?itemid=10358836",
            "https://media1.tenor.com/images/c263375bf2b35ed931edf05c8694910d/tenor.gif?itemid=15111557",
            "https://media1.tenor.com/images/cf8bdddf5c49c6e254c57490a53ac697/tenor.gif?itemid=8390956",
            "https://media1.tenor.com/images/fa4dbfc9fa56aaa31c2535aed0587a84/tenor.gif?itemid=16716542",
            "https://media1.tenor.com/images/68d07bdc2be6477c71f592f4325f52e4/tenor.gif?itemid=12434266",
            "https://media1.tenor.com/images/6e2fe9073f4e6aa4080e2e9ab5e3f790/tenor.gif?itemid=10358835",
            "https://media1.tenor.com/images/aeab776fc1449d6c00237508a27ce025/tenor.gif?itemid=20720448",
            "https://media1.tenor.com/images/0f98bb5df31a05566373da8883c59c9c/tenor.gif?itemid=12880079",
            "https://media1.tenor.com/images/a67e041bef32fc0ff75ebc1f7c9b6356/tenor.gif?itemid=15788996",
            "https://media1.tenor.com/images/7bc4d64e71d12c7d9b9482f4f2329636/tenor.gif?itemid=21707943",
            "https://media1.tenor.com/images/65a63a319a598ac908960bfc4b6f89ff/tenor.gif?itemid=13221050",
            "https://media1.tenor.com/images/4f1782879ae2c840ef44e4fbe411086a/tenor.gif?itemid=15384212",
            "https://media1.tenor.com/images/413692623fa5a37118feab1811229bc3/tenor.gif?itemid=18959319",
            "https://media1.tenor.com/images/1f06e53598fb516931da7baee4807e4d/tenor.gif?itemid=9118951",
            "https://media1.tenor.com/images/0b8c1197ace570970743d1ad601d95bc/tenor.gif?itemid=21988916",
            "https://media1.tenor.com/images/37ceeaa82fb503fb10bbd539ad4e3fd8/tenor.gif?itemid=16477767",
            "https://media1.tenor.com/images/99072c20764f4cbab2c17d5be2a9d360/tenor.gif?itemid=16079455",
            "https://media1.tenor.com/images/85ae811b41326a6138677b4293d4c0d8/tenor.gif?itemid=10824318",
            "https://media1.tenor.com/images/724cfdb924041a5c823f05d2b09f8530/tenor.gif?itemid=21089042",
            "https://media1.tenor.com/images/af6e689521bb40b7739c7e4be12afb9f/tenor.gif?itemid=20427458",
            "https://media1.tenor.com/images/94de7bd30a6779f05f3eeef441f12b53/tenor.gif?itemid=20779050",
            "https://media1.tenor.com/images/2b738fcd3e92055f3573788188a44359/tenor.gif?itemid=21540755",
            "https://media1.tenor.com/images/ebc26c708912289cb54d1fa25ff1671c/tenor.gif?itemid=20427459",
            "https://media1.tenor.com/images/f8a3c8a0fe12d31559abcb3c277a227d/tenor.gif?itemid=16465169",
            "https://media1.tenor.com/images/b6c282f79c0f1dc0af09411c69dcfef1/tenor.gif?itemid=19938113",
            "https://media1.tenor.com/images/6a8d4c829fc83f33c1b4c09bb71b21a1/tenor.gif?itemid=21438180",
            "https://media1.tenor.com/images/cdbb602c82688f1185203f02f1f5ecf4/tenor.gif?itemid=19511288",
            "https://media1.tenor.com/images/23d64965e11156025fc1fba8ea502170/tenor.gif?itemid=21171302"
        ];

        wantneed = [
            "wants",
            "needs"
        ];

        if((message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) || 
        (message.guild.me.hasPermission("ADMINISTRATOR"))) {

            if(args[0]) {
                    if(target) {

                        kissme = [
                            "Ahh, kiss me more.. I like it!",
                            `${target.username} has been kissed by ${message.author.username}.`,
                            `${message.author.username} is kissing me.`,
                            `${message.author.username} is kissing ${target.username}.`
                        ];

                        kissother = [
                            `${target.username} has been kissed by ${message.author.username}.`,
                            `${message.author.username} is kissing ${target.username}.`
                        ];

                        selfkiss = [
                            "If you need to kiss someone, just kiss me...",
                            `${message.author.username} ${wantneed[Math. floor(Math. random()*wantneed. length)]} a kiss from someone...`,
                            `${message.author.username} ${wantneed[Math. floor(Math. random()*wantneed. length)]} to kiss someone...`
                        ];

                        kisssome = [
                            `${message.author.username} ${wantneed[Math. floor(Math. random()*wantneed. length)]} a kiss from someone...`,
                            `${message.author.username} ${wantneed[Math. floor(Math. random()*wantneed. length)]} to kiss someone...`
                        ]

                        if(target.id === message.author.id) {
                            return message.channel.send(new MessageEmbed()
                                    .setTitle(`${message.author.username} ${wantneed[Math. floor(Math. random()*wantneed. length)]} a kiss from someone...`)
                                    .setImage(images[Math. floor(Math. random()*images. length)])
                                    .setColor(color));

                        } else if(target.id === "873412136578211840") {
                            return message.channel.send(new MessageEmbed()
                                    .setTitle(kissme[Math. floor(Math. random()*kissme. length)])
                                    .setImage(images[Math. floor(Math. random()*images. length)])
                                    .setColor(color));

                        } else {
                            return message.channel.send(new MessageEmbed()
                                    .setTitle(kissother[Math. floor(Math. random()*kissother. length)])
                                    .setImage(images[Math. floor(Math. random()*images. length)])
                                    .setColor(color));
                    };

                } else {
                    return message.channel.send(new MessageEmbed()
                    .setTitle(kisssome[Math. floor(Math. random()*kisssome. length)])
                    .setImage(needs[Math. floor(Math. random()*needs. length)])
                    .setColor(color));
                };

            } else {
                return message.channel.send(new MessageEmbed()
                    .setTitle(kisssome[Math. floor(Math. random()*kisssome. length)])
                    .setImage(needs[Math. floor(Math. random()*needs. length)])
                    .setColor(color));
        }

        } else {
            console.log("Unable to run \"KISS\" command | Reason: MISSING_PERMISSIONS");
        }
    }
}
