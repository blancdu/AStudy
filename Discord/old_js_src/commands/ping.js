const { SlashCommandBuilder } = require('@discordjs/builders');

// deploy slash command
const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

module.exports = {
    data,
    async execute(interaction) {
		if (!interaction.isCommand()) {
            console.error('interaction is not command!!');
            return;
        }
        const msg = await interaction.deferReply({ ephemeral: true, fetchReply: true });
        await interaction.editReply({ content:`Bot Latency: ${msg.createdTimestamp - interaction.createdTimestamp}ms\nWebsocket Latency: ${interaction.client.ws.ping}ms` });
    },
};