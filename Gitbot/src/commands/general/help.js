const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Displays a list of Gitbot commands.',
    aliases: ['commands', 'cmds'],
    execute(message) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**Command List**')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))
            .setDescription('Gitbot is a Github-themed bot developed by foop#6142. It is made to help Github developers find information about repositories and users without leaving Discord.')
            .addField("Prefix", [
                `**Prefix:** git `
            ].join('\n'))
            .addField("General", [
                `**help:** Displays a list of Gitbot commands.`,
                `**info:** Displays general information about Gitbot.`,
            ].join('\n'))
            .addField("Utility", [
                `**ping:** Calculates your latency.`
            ].join('\n'))
            .addField("Github", [
                `**repository:** Looks up a repository on Github.`,
                `**user:** Looks up a user on Github.`
            ].join('\n'))

        return message.channel.send(helpEmbed);
    }
}