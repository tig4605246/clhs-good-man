const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
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

client.on("message", (message) => {
  if (message.content.startsWith("CLHS")) {
    // Create the attachment using MessageAttachment
		const attachment = new MessageAttachment('https://i.imgur.com/CqTXdVF.png');
		// Send the attachment in the message channel
		message.channel.send(attachment);
  }
});

client.on("message", (message) => {
  if (message.content.includes("Grim Dawn")) {
    message.channel.send("來啦現在夏季特賣只要NTD 172 !!");
    message.channel.send("https://store.steampowered.com/app/219990/Grim_Dawn/");
  }
});
 
client.login(process.env.BOT_KEY);