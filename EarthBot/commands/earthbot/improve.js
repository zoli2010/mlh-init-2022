const Discord = require('discord.js');

module.exports = {
    name: 'improve',
    description: "Shares some tips to improve you and your environment.",
    cooldown: 3,
    execute(message, args) {
        improve_list = [
            "Practice the 3Rs.",
            "Plant trees, vegetables, or other plants.",
            "Stop using paper, and switch to digital.",
            "Don't use plastic straws.",
            "Compost leftover food instead of throwing them away.",
            "Plant pollinator-friendly plants, like flowers.",
            "Purchase reusable water bottles instead of buying single-use plastic bottles.",
            "Volunteer for a wildlife organization.",
            "Pick up trash and throw them in bins.",
            "Don't buy clothes if you need them.",
            "Save electricity by turning of appliances when you're not using them.",
            "Use cold water instead of hot water when showering.",
            "Use solar energy instead of energy that come from non-renewable sources.",
            "Buy local produce in order of international produce.",
            "Share car rides to cut down on fuel.",
            "Go organic.",
            "Ditch plastic bags and bring your own reusable bags."
        ]

        random_index = Math.floor(Math.random() * improve_list.length)

        improveEmbed = new Discord.MessageEmbed()
            .setTitle("Here's a tip to save the environment!")
            .setColor("RANDOM")
            .setDescription(improve_list[random_index])

        message.channel.send(improveEmbed)
    }
}