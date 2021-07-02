const Discord = require('discord.js');

module.exports = {
    name: 'aquatic',
    description: "Shares some facts about aquatic animals..",
    cooldown: 3,
    aliases: ["aquaticfact", "oceanfact"],
    execute(message, args) {
        aquatic_list = [
            "There are seven species of marine turtles.",
            "There are over 500 species of sharks.",
            "Most sharks are cold-blooded.",
            "Sharks have a sixth sense.",
            "Sharks have been around for over 400 million years.",
            "Turtles don't have teeth.",
            "Turtle shells are made of over 50 bones fused together.",
            "The leatherback turtle can reach up to 180cm long.",
            "Turtles have colour preferences.",
            "There are 36 species of marine dolphins.",
            "Bottlenose dolphins eat fish head-first.",
            "Dolphins like to blow bubbles.",
            "Dolphins have some of the most elaborate acoustic abilities in the animal kingdom.",
            "Dolphins can turn off half of their brain.",
            "Whale sharks are the world's largest fish.",
            "Whale sharks can live to 150.",
            "Humpback whales don't eat for most of the year.",
            "The name 'narwhal' comes from Old Norse.",
            "The Antartic Blue Whale is the largest animal on the planet.",
            "Killer whales aren't actually whales.",
            "The majority of life on Earth is aquatic."
        ]

        random_index = Math.floor(Math.random() * aquatic_list.length)

        aquaticEmbed = new Discord.MessageEmbed()
            .setTitle("Here's an intriguing fact about animals in the sea!")
            .setColor("RANDOM")
            .setDescription(aquatic_list[random_index])

        message.channel.send(aquaticEmbed)
    }
}
