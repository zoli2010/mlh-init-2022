const fs = require('fs')
const Discord = require('discord.js'); 
const client = new Discord.Client(); // This "client" basically refers to our bot.

module.exports = { client }

// Requires the config.json file, which is where we'll be retrieving the bot prefix & token.
const { prefix, token } = require('./config.json')


client.cooldowns = new Discord.Collection();

// The following chunk is how the program retrieves the command files from the folders.
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}


// Once: (the bot comes online), run: (this code)
client.once('ready', () => {
    console.log('Ready!');
})


// If: (a message is sent), run: (this code)
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // Checks for possible command aliases.

    if (!command) return;

    // If the command can only be run inside a server (e.g. !serverstats, !kick), and the command is run inside DMs, alert user.
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    // Checks for user's permission whe permissions are required. If the user has no permissions, alert user.
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this!');
        }
    }

    // Checks for arguments when arguments are required. If not, alert user and reply with proper command usage, if any.
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}`

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // The following code is used to calculate cooldowns. If the user uses a command without waiting for the cooldown to expire, alert user.
    const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
            const cooldownEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))
                .setDescription(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
			return message.channel.send(cooldownEmbed)
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
})

// Logs errors in the console.
client.on('shardError', error => {
    console.error('A websocket connection encountered an error: ', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection: ', error);
});

// Makes the bot come online.
client.login(token);

