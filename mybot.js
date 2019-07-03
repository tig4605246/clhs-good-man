// Extract the required classes from the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
    // Create the attachment using Attachment
		const attachment = new Discord.Attachment('https://i.imgur.com/CqTXdVF.png');
		// Send the attachment in the message channel
		message.channel.send(`${message.author}`,attachment);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("等等")) {
    // Create the attachment using Attachment
		const attachment = new Discord.Attachment('https://i.imgur.com/s1bDbYR.png');
		// Send the attachment in the message channel
		message.channel.send(attachment);
  }
});


client.on("message", (message) => {
  if (message.content.includes("Grim Dawn")) {
    message.channel.send(`${message.author}`+" 來啦現在夏季特賣只要NTD 172 !!");
    message.channel.send("https://store.steampowered.com/app/219990/Grim_Dawn/");
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new Discord.RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  // Send the message to a designated channel on a server:
  const channel = newMember.guild.channels.find(ch => ch.name === '真的廢話');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    // User Joins a voice channel
    // Send the message, mentioning the member
    channel.send(`${newMember} 跑進語音頻道大吵大鬧啦~`);

  }else if(newUserChannel === undefined){
    // User leaves a voice channel
    // Send the message, mentioning the member
    channel.send(`${newMember} 玩累了離開啦<o'_'o>`);
  }
})

client.on("message", (message) => {
  if (message.content.startsWith("今天要玩啥")) {
    message.channel.send(`${message.author}`+" 來啦看看這個");

    message.channel.send("https://store.steampowered.com/app/"+getRandomInt(40000).toString);
  }
});

client.login(process.env.BOT_KEY);