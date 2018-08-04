const { Discord, RichEmbed } = require('discord.js');
const fs = require("fs");
const moment = require("moment");
const devs = ['431150885549113344','244423000802328576','343383616895713290','171259176029257728'];
const errmsg = "<:eRrOr:475075170231517184> **Oops, something unexpected happened!** The error was sent to our team and we'll do our best to fix it."
const client = new Discord.Client({
    disableEveryone: true,
    messageCacheMaxSize: 500,
    messageCacheLifetime: 120,
    messageSweepInterval: 60
  });
const prefix = '.'
client.login(process.env.SECERT_TOKEN);


//By Abady Refactoring
// client.on('message', message => {
//   var argresult = message.content.split(` `).slice(1).join(' ');
//     if (!devs.includes(message.author.id)) return;
    
// if (message.content.startsWith(adminprefix + 'setgame')) {
//   client.user.setGame(argresult);
//     message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
// } else 
//   if (message.content.startsWith(adminprefix + 'setname')) {
// client.user.setUsername(argresult).then
//     message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
// return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
// } else
//   if (message.content.startsWith(adminprefix + 'setavatar')) {
// client.user.setAvatar(argresult);
//   message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
//       } else     
// if (message.content.startsWith(adminprefix + 'setT')) {
//   client.user.setGame(argresult, "https://www.twitch.tv/idk");
//     message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
// }

// });

//Refactoring..
// ///مانع القحفله
// var guilds = {};
// client.on('guildBanAdd', function(guild) {
//             const rebellog = client.channels.find("name", "log"),
//             Onumber = 3,
//   Otime = 10000
// guild.fetchAuditLogs({
//     type: 22
// }).then(audit => {
//     let banner = audit.entries.map(banner => banner.executor.id)
//     let bans = guilds[guild.id + banner].bans || 0 
//     guilds[guild.id + banner] = {
//         bans: 0
//     }
//       bans[guilds.id].bans += 1; 
// if(guilds[guild.id + banner].bans >= Onumber) {
// try {
// let roles = guild.members.get(banner).roles.array();
// guild.members.get(banner).removeRoles(roles);
//   guild.guild.member(banner).kick();

// } catch (error) {
// console.log(error)
// try {
// guild.members.get(banner).ban();
//   rebellog.send(`<@!${banner.id}>
// حآول العبث بالسيرفر @here`);
// guild.owner.send(`<@!${banner.id}>
// حآول العبث بالسيرفر ${guild.name}`)
//     setTimeout(() => {
//  guilds[guild.id].bans = 0;
//   },Otime)
// } catch (error) {
// console.log(error)
// }
// }
// }
// })
// });
//  let channelc = {};
//   client.on('channelCreate', async (channel) => {
//   const rebellog = client.channels.find("name", "log"),
//   Oguild = channel.guild,
//   Onumber = 3,
//   Otime = 10000;
//   const audit = await channel.guild.fetchAuditLogs({limit: 1});
//   const channelcreate = audit.entries.first().executor;
//   console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
//    if(!channelc[channelcreate.id]) {
//     channelc[channelcreate.id] = {
//     created : 0
//      }
//  }
//  channelc[channelcreate.id].created += 1;
//  if(channelc[channelcreate.id].created >= Onumber ) {
//     Oguild.members.get(channelcreate.id).kick();
// rebellog.send(`<@!${channelcreate.id}>
// حآول العبث بالسيرفر @here`);
// channel.guild.owner.send(`<@!${channelcreate.id}>
// حآول العبث بالسيرفر ${channel.guild.name}`)
// }
//   setTimeout(() => {
//  channelc[channelcreate.id].created = 0;
//   },Otime)
//   });

// let channelr = {};
//   client.on('channelDelete', async (channel) => {
//   const rebellog = client.channels.find("name", "log"),
//   Oguild = channel.guild,
//   Onumber = 3,
//   Otime = 10000;
//   const audit = await channel.guild.fetchAuditLogs({limit: 1});
//   const channelremover = audit.entries.first().executor;
//   console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
//    if(!channelr[channelremover.id]) {
//     channelr[channelremover.id] = {
//     deleted : 0
//      }
//  }
//  channelr[channelremover.id].deleted += 1;
//  if(channelr[channelremover.id].deleted >= Onumber ) {
//   Oguild.guild.member(channelremover).kick();
// rebellog.send(`<@!${channelremover.id}>
// حآول العبث بالسيرفر @here`);
// channel.guild.owner.send(`<@!${channelremover.id}>
// حآول العبث بالسيرفر ${channel.guild.name}`)
// }
//   setTimeout(() => {
//  channelr[channelremover.id].deleted = 0;
//   },Otime)
//   });
// ///End
// ///id
/////////////// Functions //////////////////
function random(xlenght) {
    return Math.floor((Math.random() * xlenght));
}

function errormsg(err, cmd) {
    message.channel.send(errmsg) 
    client.channels.get("474245438837620736").send(`**:warning: Error**`, {embed: {
    description: err,
    fields: [
        {
        name: "**server**",
        value: message.guild.name
        }, 
        {
        name: "**user**",
        value: message.author.username
        }, 
        {
        name: "**command**",
        value: cmd
        }
    ]}})
    return; 
}
/////////////// Other Client Events //////////////////
client.on("ready", () =>{
client.user.setActivity(".help | Alpha")
client.channels.get("475028391473709068").send(`Megumi's bot is ready.`)
})
client.on("error", (error) => client.channels.get("474245438837620736").send(error))
/////////////// Other Client Events //////////////////

client.on('message', message => {
if(message.channel.type !== "text") return; 
let args = message.content.split(" ").slice(1);
let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0]) || message.author
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// C O M M A N D S //////////////////

 if(message.content.startsWith(`${prefix}hug`)) {
    const { hug } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots.`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "<:waifuHug:475072567137533953> Awwwwww ): you seems too lonely. take a hug" : `<:waifuHug:475072567137533953> **${user.user.username}** you have been hugged by **${message.author.username}**`, {files:
    [hug[random(hug.length)]]
    }).catch(err => errormsg(err, "hug"))
}

else if(message.content.startsWith(`${prefix}kiss`)) {
    const { kiss } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "<a:waifuKiss:475096313482969089> Awwwwww ): you seems too lonely. take a kiss" : `**<a:waifuKiss:475096313482969089> ${user.user.username}** you have been kissed by **${message.author.username}**`, {files:
    [kiss[random(kiss.length)]]
    }).catch(err => errormsg(err, "kiss"))
}

else if(message.content.startsWith(`${prefix}slap`)) {
    const { slap } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "u SlApPeD ur Slef!?!?" : `**${user.user.username}** you have been slapped by **${message.author.username}**`, {files:
    [slap[random(slap.length)]]
    }).catch(err => errormsg(err, "slap"))
}

else if(message.content.startsWith(`${prefix}pat`)) {
    const { pat } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "Awwwwww ): you seems too lonely. here a pat" : `**${user.user.username}** you have been patted by **${message.author.username}**`, {files:
    [pat[random(pat.length)]]
    }).catch(err => errormsg(err, "pat"))
}

else if(message.content.startsWith(`${prefix}cuddle`)) {
    const { cuddle } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "Awwwwww ): you seems too lonely. here a cuddle" : `**${user.user.username}** you have been cuddled by **${message.author.username}**`, {files:
    [cuddle[random(cuddle.length)]]
    }).catch(err => errormsg(err, "cuddle"))
}

else if(message.content.startsWith(`${prefix}poke`)) {
    const { poke } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "U PoKEd Ur SeLf! r U sCared?" : `**${user.user.username}** you have been poked by **${message.author.username}**`, {files:
    [poke[random(poke.length)]]
    }).catch(err => errormsg(err, "poke"))
}

else if(message.content.startsWith(`${prefix}tickle`)) {
    const { tickle } = require(`./data/reactions.js`)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you)`)
    if(message.mentions.users.size < 1 && !args[0]) return message.channel.send(":x: You need to mention/type a user.")
    user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
    if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
    message.channel.send((user.id === message.author.id) ? "You tickled ur self ):" : `**${user.user.username}** you have been tickled by **${message.author.username}**`, {files:
    [tickle[random(tickle.length)]]
    }).catch(err => errormsg(err, "tickle"))
} 
else if(message.content.startsWith(`${prefix}avatar`)) {
user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0])
if(!message.mentions.users.first() || !args[0]) user = message.member
if(!user) return message.channel.send(`:x: Couldn't find a user with **${args}**.`)
message.channel.send(new RichEmbed()
.setTitle(`${user.username}'s Avatar URL`)
.setURL(user.user.avatarURL)
.setImage(user.user.avatarURL)
.setFooter(`Requsted by ${message.author.username}`, message.author.avatarURL)
).catch(err => errormsg(err, "avatar"))
}
else if (message.content.startsWith(`${prefix}server`)) {
const vlevel = ['None', 'Low', 'Medium', 'High', 'Ultra-High']
message.channel.send(new RichEmbed()
.setAuthor(`${message.guild.name} (${message.guild.id})`, message.guild.iconURL)
.addField('🛡 Security', vlevel[message.guild.verificationLevel], true)
.addField('🌐 Region', message.guild.region, true)
.addField("👑 Owner", `<@${message.guild.owner.id}>`, true)
.addField("👥 Members", `${message.guild.members.size} total (**${message.guild.members.filter(user => user.presence.status === "online").size + message.guild.members.filter(user => user.presence.status === "dnd").size + message.guild.members.filter(user => user.presence.status === "idle").size}** online)`, true)
.addField("🗨 Channels", `**${message.guild.channels.filter(c => c.type === 'category').size}** Categories | **${message.guild.channels.filter(c => c.type === 'text').size}** Text | **${message.guild.channels.filter(c => c.type === 'voice').size}** Voice`, true)
.addField("🔐 Roles", `**${message.guild.roles.size}** role. use **${prefix}roles** to view a list of roles`, true)
.setFooter(`Requsted by ${message.author.username}`, message.author.avatarURL)
.setColor("GREEN")
).catch(err => errormsg(err, "server"))
}
else if(message.content.startsWith(`${prefix}roles`)) {
const roles = message.guild.roles.sort(function(b,a) {return a.position - b.position}).map(m => m.name).join(" ");
message.channel.send(new RichEmbed()
.setColor('GREEN')
.setDescription(roles)
.setAuthor(`${message.guild.name}'s Roles`,message.guild.iconURL)
).catch(err => errormsg(err, "roles"))

} else if(message.content.startsWith(`${prefix}reboot`)) {
if(devs.includes(message.author.id)) {
message.channel.send(`**Rebooting....**`).then(client.destroy())
.catch(err => errormsg(err, "reboot"))
}

}else if(message.content.startsWith(`${prefix}ping`)) {
    message.channel.sendMessage("**Pinging...**").then((message)=> {

        message.edit(`**Time Taken :ping_pong: ** \`${Date.now() - message.createdTimestamp} ms\`` + `\n **Discord API <:disc:475249489607917580> ** \`${client.pings[1]} ms\``);
        
  })
}
});



// //Server icon
// client.on("message", message => {
//     const prefix = "."
              
//           if(!message.channel.guild) return;
//    if(message.author.bot) return;
//       if(message.content === prefix + "icon"){ 
//           const embed = new Discord.RichEmbed()
  
//       .setTitle(`This is  ** ${message.guild.name} **  icon !`)
//   .setAuthor(message.author.username, message.guild.iconrURL)
//     .setColor(0x164fe3)
//     .setImage(message.guild.iconURL)
//     .setURL(message.guild.iconrURL)
//                     .setTimestamp()

//    message.channel.send({embed});
//       }
//   });
// ///end

// ///avatar
// client.on('message', message => {
//     if (message.content.startsWith(".avatar")) {
//         const user = message.mentions.users.first() || message.author
//         const embed = new Discord.RichEmbed()
//         .setColor("RANDOM")
//         .setImage(`${user.avatarURL}`)
//         .setTitle("Avatar URL")
//         .setURL(user.avatarURL)
//       message.channel.send(embed);
//     }
// });
// ///end

// ///MEMBER
// client.on('message', message => {
//     if(message.content == '.members') {
//     const embed = new Discord.RichEmbed()
//     .setColor('RANDOM')
//     .setImage(message.guild.iconURL)
//     .addField(`Status of Members🔋`,'-',   true)
// .addField(`💚 Online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
// .addField(`❤ Do Not Disturb:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
// .addField(`💛 Idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
// .addField(`🖤 Offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
// .addField(`💙  All:  ${message.guild.memberCount}`,'-',   true)         
//          message.channel.send({embed});

//     }
//   });
// ///end
