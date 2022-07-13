const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction, client) {
        const msg = await interaction.deferReply({ephemeral: true, fetchReply: true});
        await interaction.followUp({ content:`Bot Latency: ${msg.createdTimestamp - interaction.createdTimestamp}ms\nWebsocket Latency: ${client.ws.ping}ms`});
    },
};