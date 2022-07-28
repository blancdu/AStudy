const { SlashCommandBuilder } = require('@discordjs/builders');

// deploy slash command
const data = new SlashCommandBuilder()
    .setName('autocomplete')
    .setDescription('Test command to show how autocomplete should be set up')
    .addStringOption(option =>
        option
            .setName('name')
            .setDescription('Name of something')
            .setAutocomplete(true));

module.exports = {
    data,
    async execute(interaction) {
        if (interaction.isAutocomplete()) {
            const focusedValue = interaction.options.getFocused();
            const choices = ['faq', 'install', 'collection', 'promise', 'debug'];
            const filtered = choices.filter(choice => choice.startsWith(focusedValue));
            await interaction.respond(
                filtered.map(choice => ({ name: choice, value: choice })),
            );
        }
        else if (interaction.isCommand()) {
            await interaction.reply({ content : `${interaction.options.getString('name')}`, ephemeral: true });
        }
    },
};