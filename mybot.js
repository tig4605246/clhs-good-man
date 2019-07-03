const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("神經病")) {
    message.channel.send("什麼鬼套路");
  }
});

client.on("message", (message) => {
    if (message.content.startsWith("神經病")) {
      message.channel.send("什麼鬼套路");
    }
});

client.on("message", (message) => {
    if (message.content.includes("POE")||message.content.includes("流亡黯道")) {
      message.channel.send("垃圾雞舍");
    }
});
 
client.login(process.env.BOT_KEY);