const { SlashCommandBuilder } = require('@discordjs/builders');

// deploy slash command
const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true));

module.exports = {
	data,
	async execute(interaction) {
		await interaction.reply({ content:`${interaction.options.getString('input')}`, ephemeral: true });
	},
};
