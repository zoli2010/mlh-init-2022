const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'user',
    description: 'Looks up a user on Github.',
    args: true,
    usage: '<user>',
    aliases: ['username'],
    cooldown: 3,
    async execute(message, args) {
        if (args.length === 0) {
            return message.reply('please use a proper repository name.');
        }

        const [username] = args[0].split(" ")

        if (!username) {
            return message.reply('your queried username is invalid. Please provide a valid user next time.')
        }

        const body = await fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.ok && response.json())
            .catch(() => null);

        if (!body) {
            return message.reply('I could not fetch that username. Are you sure it\'s valid?')
        }

        const githubEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(body.login)
            .setAuthor('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', "https://github.com")
            .setURL(body.html_url)
            .setThumbnail(`${body.avatar_url}`)
            .setDescription(`${body.bio || "No bio found."}\n\n**Company:** ${body.company || "No company found."}\n**Blog:** ${body.blog || "No blog found."}\n**Location:** ${body.location || "No location found."}\n**Email:** ${body.email || "No email found."}\n**Twitter:** ${body.twitter_username || "No Twitter found."}\n\n**Public Repos:** ${body.public_repos}\n**Public Gists:** ${body.public_gists}\n**Followers:** ${body.followers}\n**Following:** ${body.following}`)

        return message.channel.send(githubEmbed);
    }
}