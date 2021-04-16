const gif = require("./commands/gif");
const greetings = require("./commands/greetings");

const commands = { greetings, gif }
// basically --> greetings: greetings, gif: gif,

module.exports = async function (message){
    if (message.channel.id == "832616911850307585"){
        let tokens = message.content.split(" ");
        let command = tokens.shift();
        // shifts everything in array and removes the first character using substring
        if (command.charAt(0) === "!"){
            command = command.substring(1);
            // valid command
            commands[command](message, tokens);

            // greetings or gifs
        }
    } 
};

