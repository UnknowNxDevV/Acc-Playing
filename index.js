const { Client, Collection } = require("discord.js");


const config = ("config.json")
client.login("Token Bot")
const Id Acount = ("config.json")





const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});

client.on('ready', async () => { console.log(The,client.user.tag,is Online);})

client.on('ready', async () => {
client.user.setPresence({status: "Idle" } )
client.user.setActivity( {type: "STREAMING", url: "https://github.com/UnknowNxDevV%22%7D, {name: "Under Development By Unknwon "} ) 

   })
