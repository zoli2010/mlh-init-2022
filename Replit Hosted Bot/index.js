const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// BOT CODE

const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong!');
  } else if (msg.content === '!hello') {
    msg.reply('hey!')
  }
});

const token = "enter your token here"

client.login(token)