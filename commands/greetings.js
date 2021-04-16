const replies = [
    "Hello, Kindred!",
    "Lessez les bon temps rouler!",
    "Lessez les bon temps rouler les 6!",
    "Mon chère, bienvenue!",
    "Welcome to New Orleans!",
    "Welcome to your new unlife!",
    "Lessez les dés lancer les 6!"
]

module.exports = function(message, args){
    const index = Math.floor(Math.random() * replies.length);
    message.channel.send(replies[index])
}
