module.exports = function(message, args){
    if(message.content == "I love vampires"){
        message.react("❤️")
    }
}