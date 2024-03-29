// Extract the required classes from the discord.js module
const Discord = require('discord.js');
const request = require('request');
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
  if (message.content.startsWith("那個貓咪")||message.content.includes("Angel Lee")||message.content.includes("閃電十一人")) {
    message.channel.send("犀利山靈霸");
    var r = request.get("http://graph.facebook.com/100002006753147/picture?type=large", function (err, res, body) {
      console.log(r.uri.href);
      //console.log(res.request.uri.href);
      message.channel.send(r.uri.href)
    })
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("最可愛")||message.content.includes("水躍魚")) {
    message.channel.send("哈拉哈拉~");
    message.channel.send("https://imgur.com/gallery/WBbZqQz")
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
  if (message.content.startsWith("今天要玩啥")||message.content.startsWith("有啥好玩")) {
    message.channel.send(`${message.author}`+" 來啦看看這個");
    var r = request.get("http://store.steampowered.com/explore/random/", function (err, res, body) {
      console.log(r.uri.href);
      //console.log(res.request.uri.href);
      message.channel.send(r.uri.href)
    })
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("找老婆")) {
    message.channel.send(`${message.author}`+" 今日你的老婆是");

    message.channel.send("https://www.animecharactersdatabase.com/characters.php?id=" + getRandomInt(95000).toString())
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("看報紙")||message.content.startsWith("看新聞")) {
    message.channel.send(`${message.author}`+" 今日新聞懶人包：");
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=tw&' +
          'apiKey=' + process.env.NEWS_KEY;
    var r = request.get(url, function (err, res, body) {
      console.log(r.uri.href);
      //console.log(res.request.uri.href);
      var jsonObject = JSON.parse(body);
      var sentence = ""
      for(i=0;i<jsonObject.articles.length;i++){
        sentence = ""
        sentence = sentence +"撰文記者 or 來源： "+ jsonObject.articles[i].author+"\n"
        sentence = sentence +"標題： "+ jsonObject.articles[i].title+"\n"
        sentence = sentence +"發表時間： "+ jsonObject.articles[i].publishedAt+"\n"
        message.channel.send(sentence)
      }
      
    })
  }
});

client.login(process.env.BOT_KEY);
