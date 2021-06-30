const { client } = require('../../index');

module.exports = {
    name: 'ping',
    description: 'Bot latency',
    aliases: ['ping'],
    execute(message) {
        message.reply('calculating ping...').then(
            (resultMessage) => {
                const ping = resultMessage.createdTimestamp - message.createdTimestamp;

                resultMessage.edit(`:ping_pong: Ping! Bot latency: \`${ping}ms\`. API Latency is \`${Math.round(client.ws.ping)}ms\`.`);
            }
        )
    }
}