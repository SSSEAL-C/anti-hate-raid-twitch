const version = "v1.0"
const tmi = require('tmi.js');
const fs = require('fs')
const config = require("./files/config.json")
const twitchslurs = [
]
console.log(fs.readFileSync('./files/emblem.txt').toString())
console.log("Version "+version+" loaded!")
function array_set(array,list,platform,log){
    let f = 0
    for(i in array) {
        list.push(array[i])
        f++
    }
    if (log === "y") {
        console.log(f+" slurs loaded into "+platform+" blocking!"); return
    }
    return
}
function twitch_slur_setup() {
    var twitchslursfile = require(config.twitch_slurs_file)
    var twitcharray = twitchslursfile.slurs
    array_set(twitcharray,twitchslurs,"Twitch","y")
    console.log('-- Twitch Slur Detect initialied!')
    return
}
twitch_slur_setup()
const client = new tmi.Client({
    options: { debug: false },
    identity: {	username: config.twitch_username, password: config.twitch_password },
    channels: [ config.twitch_channel ]
});
client.connect();
console.log('Twitch Bot Online!')
client.on('message', (channel, tags, message, self) => {
    (async () => {
    try{
        if (self) return
        username = tags['display-name'];
        if (message === "slur-version") {
            console.log(`${username}: ${message}`)
            client.say(config.twitch_channel, `@${tags.username}, Slur Detect is running ${version}`)
        }
        twitchslurs.forEach(function(slur){
            console.log(slur)
            console.log(`${username}: ${message}`)
                if (message === slur) {
                    badword=slur
                    client.ban(config.twitch_channel, username, "Hate Raid").catch((err) => {
                            console.warn(err)
                    });
                    fs.writeFile('./files/twitch-bots.txt', username, (error) => {
                        if (error) throw err;
                    })
                }
                    
        });
    }  
    catch(err){console.warn(err)}
})();
})