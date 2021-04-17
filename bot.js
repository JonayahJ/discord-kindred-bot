console.log("Beep boop beep! 🤖");
require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();
client.login(process.env.BOTTOKEN)

client.on("ready", readyDiscord);

function readyDiscord(){
    console.log("🥳 Success!")    
}

const commandHandler = require("./commands")

client.on("message", commandHandler);

client.on("message", msg => {
    if (msg.content == "I love vampires"){
        msg.react("❤️")
        console.log("This works?")
    }
})
