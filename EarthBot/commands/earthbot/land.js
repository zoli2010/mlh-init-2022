const Discord = require('discord.js');

module.exports = {
    name: 'land',
    description: "Shares some facts about land animals.",
    cooldown: 3,
    aliases: ["landfact"],
    execute(message, args) {
        land_list = [
            "There are 1 million ants for every human in the world.",
            "A snail can sleep for three years at a time.",
            "Octopuses have three hearts.",
            "A bat can eat up to 1 thousand insetcs per hour.",
            "A dog's sense of smell is about 100,000 stronger than ours.",
            "Polar bears have black skin.",
            "Honeybees can flap their wings 200 times per second.",
            "A sea lion is the first non-human mammal with a proven ability to keep a beat.",
            "The flamingo can only eat when its head is upside-down.",
            "A housefly hums in the key of F.",
            "Sea otters hold each other's paws when they sleep so they don't drift apart.",
        ]

        random_index = Math.floor(Math.random() * land_list.length)

        landEmbed = new Discord.MessageEmbed()
            .setTitle("Here's an interesting fact about land animals!")
            .setColor("RANDOM")
            .setDescription(land_list[random_index])

        message.channel.send(landEmbed)
    }
}