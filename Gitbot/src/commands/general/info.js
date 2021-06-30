const Discord = require('discord.js')
const { version } = require('discord.js')
const { client } = require('../../index')

module.exports = {
    name: 'stats',
    description: 'view stats and information for the bot',
    cooldown: 5,
    aliases: ['info', 'stats', 'statistics'],
    execute(message) {
        const secs = Math.floor(client.uptime / 1000) % 60;
        const mins = Math.floor(client.uptime / (1000 * 60)) % 60;
        const hrs = Math.floor(client.uptime / (1000 * 60 * 60)) % 24;
        const days = Math.floor(client.uptime / (1000 * 60 * 60 * 24)) % 7;
        const uptime = `${days} days, ${hrs} hours, ${mins} minutes, and ${secs} seconds`

        const statsEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Statistics for Gitbot')
            .setDescription('Gitbot is a Github-themed bot developed by foop#6142. It includes meme, fun, utility, and moderation commands.')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))
            .addField("Bot Stats", [
                `**Server Count:** ${client.guilds.cache.size}`,
                `**User Count:** ${client.guilds.cache.reduce((sum, guild) => sum + (guild.available ? guild.memberCount : 0), 0)}`,
                `**Channel Count:** ${client.channels.cache.size}`,
                `**Uptime:** ${uptime}`,
                `**Total Memory Usage:** ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)}MB`,
                `**Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
            ].join('\n'))
            .addField('Bot Versions', [
                `**Node.js Version:** ${process.version}`,
                `**Discord.js Version:** v${version}`,
                `**Gitbot Version:** v0.1-alpha.0`
            ].join('\n'))
            .addField('Links', [
                "**Source Code:** [Github Repo](https://github.com/weiyi-m/gitbot)",
            ]);
        
        return message.channel.send(statsEmbed);
    }
}