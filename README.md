# Slur Detect for Twitch and Discord
A system to detect slurs that bypass automod on twitch and discord using a discord bot and a lightweight twitch API

# Setup/Installation



## Clone the library into slur-detect


`git clone https://SSSEAL-C.github.io/anti-hate-raid-twitch/`



## Install the Packages


`npm i`

## Download Node.JS
Download it [here](https://nodejs.org/en/download/) on version LTS for your selected platform.

## Make a Twitch Bot Account


Register a normal Twitch account and write down its username. MOD THE ACCOUNT ON THE CHANNEL YOU IMPLEMENT IT ON.



## Edit the `config.json` file


The `config.json` is located in the `files/` folder.

You want to replace the `config.json` values with your own.


`twitchchannel` should be the Twitch Channel Name on twitch, eg. https://twitch.tv/Fortnite, Fortnite would be put here.

`slursfile` leave as default unless you rename or move the `slurs.txt` file.

`twitchusername` make this the Twitch Account Username from earlier.

`twitchpass` use [this site](https://twitchapps.com/tmi/) to get the oauth token for the Twitch Bot Account.


## Edit the `slurs.txt` file


Remove the pre-existing example slurs and add your own in here, a new line for each slur.

## Run the program

Go back to the main folder and run `node .`

# When reporting issues

Please use the command `slur-version` in the Twitch Channel Chat the Bot can see and report the Version Responded in your issue.
