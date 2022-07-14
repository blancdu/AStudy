const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const msg = await interaction.deferReply({ephemeral: false, fetchReply: true});
		await interaction.followUp({ content:`Bot Latency: ${msg.createdTimestamp - interaction.createdTimestamp}ms\nWebsocket Latency: ${interaction.client.ws.ping}ms`});
	},
};