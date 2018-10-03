const Discord = require ("Discord.js"); //No need to explain

const PREFIX = "kanna." ; //Kanna's prefix

var bot = new Discord.Client (); //No need to explain


//Set the bot online,status are "online","idle" and "do not disturb"
bot.on("ready",function() {
	console.log("ready")
	bot.user.setActivity("Don't lewd me !! // kanna.help") ;
	bot.user.setStatus("online");
});


bot.on("message", function (message) {
	
	if (message.author.equals(bot.user)) return;
	
	if (message.content.startsWith(PREFIX)){
		var args = message.content.substring(PREFIX.length).split(" ");			//hello there
		
		switch (args[0].toLowerCase()){
			case "test": //**Tests
			    message.channel.send("Seems working.")
				 break
				 
			case "lolis":
			    message.channel.send("Ruby don't lewd the loli,lewd <@442793696497369089>")
				break
			
			case "help": //** We need to upgrade this
			    message.channel.send({"embed": { 
				    "title": "Here,some commands,Senpai.",
					"description": "User info: ``kanna.helpinfo``\n Pictures : ``kanna.help pictures``\n Administration : ``kanna.help admin``\n Bot infos : ``kanna.help bot info``",
					"color": 0xff91ff
				}});
				 break
			
			case "helpinfo": //** We need to upgrade this
				 message.channel.send({"embed" : {
					 "title": "	Here,User info commands.",
					 "description": "``avatar`` : Shows you a beautiful avatar. ``userinfo`` : Not done yet."
				 }});
			case "avatar":
			    const member = message.mentions.members.first();
				if (!member) return message.reply("You need to mention a bot/human!");
				
			    message.channel.send("Here,a beautiful avatar. "+member.user.avatarURL);
				break
				
			case "helppictures":
			    message.channel.send("Not finished yet");
				break
		}
	

	}	
});
bot.login(bot.login(process.env.BOT_TOKEN));
