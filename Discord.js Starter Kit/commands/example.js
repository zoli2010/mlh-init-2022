// This command file is an example command!

module.exports = {
    name: 'example',
    description: 'This is an example command.',
    args: true,
    usage: '<arg1> <arg2>',
    aliases: ['instance', 'model'],
    cooldown: 10,
    guildOnly: true,
    execute(message, args) {
        // ...
    }
}