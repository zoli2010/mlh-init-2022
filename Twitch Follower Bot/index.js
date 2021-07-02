const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.create({
    "channel_id": `${process.env.CHANNEL_ID}`,
    "content": "",
    "tts": false,
    "embed": {
        "type": "rich",
        "title": "You have a new follower!",
        "description": `🎉 **${context.params.event.user_name || context.params.event.user_login}** just followed you, congratulations! 🎉`,
        "color": 0x6441a5
    }
})