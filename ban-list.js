const version = "v1.0"
const tmi = require('tmi.js');
const fs = require('fs')
const config = require("./files/config.json")
const users = [
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
function setup() {
    var userfile= require(config.ban_list)
    var userarray = userfile.users
    array_set(userarray,users,"Twitch Users","y")
    console.log('-- Twitch Bot Banner initialied!')
    return
}
setup()
const client = new tmi.Client({
    options: { debug: true },
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
        if (message === "ban-version") {
            client.say(config.twitch_channel, `@${tags.username}, Banner is running ${version}`)
        }
        if (message === "startbanning") {
            users.forEach(function(username){
                console.log(username)
                client.ban(config.twitch_channel, username, "Mass Bot Ban").catch((err) => {
                        console.warn(err)
                });  
            });
            client.say(config.twitch_channel, `@${tags.username}, Banner is finished on ${version}`)
        }
    }  
    catch(err){console.warn(err)}
})();
})