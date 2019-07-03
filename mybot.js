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
#########多的#########################################################
client.on("message", (message) => {
    if (message.content.startsWith("神經病")) {
      message.channel.send("什麼鬼套路");
    }
#####################################################################
});

client.on("message", (message) => {
    if (message.content.includes("POE")||message.content.includes("流亡黯道")) {
      message.channel.send("垃圾雞舍");
    }
 
 ########
  if (message.content.includes("旋轉跳躍") {
      message.channel.send("插到屁眼");
    }
  if (message.content.includes("猶豫") {
      message.channel.send("就會白給");
    }
  if (message.content.includes("唧唧復唧唧") {
      message.channel.send("木蘭當馬騎");
    }
  if (message.content.includes("還敢下來阿冰鳥") {
      message.channel.send("到底甚麼閃現");
    }
  if (message.content.includes("欸你過來一下") {
      message.channel.send("操你媽的你過來一下");
    }
});
 
client.login(process.env.BOT_KEY);
