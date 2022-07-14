const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('boop')
	.setDescription('Replies with beep!')
	.setDMPermission(false);

module.exports = {
	data: data,
	async execute(interaction) {
		await interaction.reply({ content: 'beep!', ephemeral: false });
	},
};