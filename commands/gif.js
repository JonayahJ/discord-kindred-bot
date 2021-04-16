const fetch = require("node-fetch");

module.exports = async function(message, args){
    let keywords = "vampire";
    if (args.length > 0){
        keywords = args.join(" ");
        // !gif vampire
        // "vampire"
    }

    let url = `https://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${process.env.GIPHYKEY}&rating=g`
    // get keyword search from giphy using api key for gifs with rating g

    let response = await fetch(url);
    let json = await response.json();

    console.log(json);

    const index = Math.floor(Math.random() * json.data.length);

    message.channel.send(json.data[index].url)
    message.channel.send("GIF from GIPHY: " + keywords)
}

