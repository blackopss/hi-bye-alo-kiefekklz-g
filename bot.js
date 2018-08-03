const Discord = require('discord.js');
const fs = require("fs");
var moment = require("moment");
const devs = ['431150885549113344','244423000802328576','343383616895713290','171259176029257728'];
const client = new Discord.Client();
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

function random(length) {
Math.floor((Math.random() * length));
}


client.on('message', message => {
if(message.channel.type !== "text") return; 
let args = message.content.split(" ").slice(1);
let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.guild.members.find(m => m.displayName === args[0]) || message.author
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// C O M M A N D S //////////////////
 if(message.content.startsWith(prefix + 'hug')) {
    const hug = fs.readFileSync(`./data/hug.js`)
    console.log(hug)
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "Awwwwww ): you seems too lonely. take a hug" : `**${user.username}** you have been hugged by **${message.author.username}**`,
    image: {
        url: hug[random(hug.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "kiss")) {
    const kiss = JSON.parse(fs.readFile(`./data/kiss.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "Awwwwww ): you seems too lonely. take a kiss" : `**${user.username}** you have been kissed by **${message.author.username}**`,
    image: {
        url: kiss[random(hug.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "slap")) {
    const slap = JSON.parse(fs.readFile(`./data/slap.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "??? You just slapped yourself" : `**${user.username}** you have been slapped by **${message.author.username}**`,
    image: {
        url: slap[random(slap.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "pat")) {
    const pat = JSON.parse(fs.readFile(`./data/pat.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "Awwwwww ): you seems too lonely. take a pat" : `**${user.username}** you have been patted by **${message.author.username}**`,
    image: {
        url: pat[random(pat.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "cuddle")) {
    const cuddle = JSON.parse(fs.readFile(`./data/cuddle.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "Awwwwww ): you seems too lonely. here a cuddle" : `**${user.username}** you have been cuddled by **${message.author.username}**`,
    image: {
        url: cuddle[random(cuddle.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "poke")) {
    const poke = JSON.parse(fs.readFile(`./data/poke.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "You just poked yourself, congrats dumb." : `**${user.username}** you have been poked by **${message.author.username}**`,
    image: {
        url: poke[random(poke.length)]
    }
    }})
}

else if(message.content.startsWith(prefix + "tickle")) {
    const tickle = JSON.parse(fs.readFile(`./data/tickle.json`, `utf8`))
    if(user.bot) return message.channel.send(`You can't do that to bots. (Bot don't give a fuck about you.)`)
    message.channel.send("", {embed: {
    description: (user.id === message.author.id) ? "tIckLeD YoUrSleF!!" : `**${user.username}** you have been tickled by **${message.author.username}**`,
    image: {
        url: tickle[random(tickle.length)]
    }
    }})
}
});

// //id(embed)
// client.on('message', message => {
//     if (message.content === prefix + ("id")) {
//         var args = message.content.split(" ").slice(1);
//         var men = message.mentions.users.first();
//            var heg;
//            if(men) {
//                heg = men
//            } else {
//                heg = message.author
//            }
//          var mentionned = message.mentions.members.first();
//             var h;
//            if(mentionned) {
//                h = mentionned
//            } else {
//                h = message.member
//            }
//                   moment.locale('eng-TN');
//          var id = new  Discord.RichEmbed()
//        .setColor("RANDOM")
//            .setThumbnail(message.author.avatarURL)
//            .setAuthor(` ${message.author.username} `, message.author.avatarURL)
//          .addField('Created At:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
//        .addField('Joined At: ', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
//        .setFooter(`#${user.discriminator}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
//        message.channel.send(id)
//    }
// })
// //end



// ///Server icon
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

// //bot-menu
// client.on('message', message => {
//     if (message.content === ".bot") {
//     if(!message.channel.guild) return;
//     if (!devs.includes(message.author.id)) return;
//     let embed = new Discord.RichEmbed()
//  .setColor('RANDOM')
//  .setTitle(`${client.user.username}'s status.`)
//  .addField("**Servers Size:**" , client.guilds.size, true)
//  .addField("**Members Size:**", `${client.users.filter(user => user.presence.status === "online") + client.users.filter(user => user.presence.status === "dnd") + client.users.filter(user => user.presence.status === "idle")} total(${client.users.size})`, true)
//  .addField("**Channels:**", client.channels.size, true)
//  .addField("**Current Version:**", "0.1 Alpha", true)
//  .setThumbnail('https://cdn2.iconfinder.com/data/icons/clean-and-simple/153/Settings-128.png')
//  message.channel.send(embed);   
// }
// });
// ///end 

// //ping-socket
// client.on('message', message => {
//     if (message.content.startsWith('.ping')) {
//                if(!message.channel.guild) return;
//     message.react(':thumbsup::skin-tone-1: ')
//     if (message.author.bot) return;
//         message.channel.sendMessage("**Pinging...**").then((message)=> {
    
//          message.edit(`**:ping_pong:** \`${Date.now() - message.createdTimestamp} ms\``);
    
//         })
//         }
    
//     });
// //end



// client.on('guildMemberAdd', member => {
//   if(!ar[member.guild.id]) ar[member.guild.id] = {
//   onoff: 'Off',
//   role: 'Member'
//   }
//   if(ar[member.guild.id].onoff === 'Off') return;
// member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
// })

// client.on('message', message => { 
//   var sender = message.author

// if(!message.guild) return
//   if(!ar[message.guild.id]) ar[message.guild.id] = {
//   onoff: 'Off',
//   role: 'Member'
//   }

// if(message.content.startsWith(prefix + `autorole`)) {
//   let perms = message.member.hasPermission(`MANAGE_ROLES`)

//   if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
//   let args = message.content.split(" ").slice(1)
//   if(!args.join(" ")) return message.reply(`${prefix}autorole toggle/set [ROLE NAME]`)
//   let state = args[0]
//   if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/set [ROLE NAME]`) 
//     if(state.trim().toLowerCase() == 'toggle') { 
//      if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
//      if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
//     }
//    if(state.trim().toLowerCase() == 'set') {
//    let newRole = message.content.split(" ").slice(2).join(" ")
//    if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
//      if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
//     ar[message.guild.id].role = newRole
//      message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
//    } 
         
//   }
 
// if(message.content === prefix + 'autorole info') {
//     let perms = message.member.hasPermission(`MANAGE_GUILD`) 
//     if(!perms) return message.reply(`You don't have permissions.`)
//     var embed = new Discord.RichEmbed()

// .addField(`Autorole : :sparkles:  `, `

// State : __${ar[message.guild.id].onoff}__
// Role : __${ar[message.guild.id].role}__`)


//     .setColor(`BLUE`)
//     message.channel.send({embed})
//   }


//     fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
//     if (err) console.error(err)
//   });


// });
// //end




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
// //Fetch-Invites
// client.on('message', message => {
//     if(message.content.startsWith(`${prefix}invites`)) {
//         message.guild.fetchInvites().then(invs => {
//           let user = message.mentions.users.first() || message.author
//           let personalInvites = invs.filter(i => i.inviter.id === user.id);
//           let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
//     message.channel.send(`${user} has ${inviteCount} invites.`);
//     });
//       }
// });
// //end