const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

// deploy slash command
const data = new SlashCommandBuilder()
    .setName('select-menus')
    .setDescription('Replies with select menus!');

module.exports = {
    data,
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('select...')
                    .addOptions([
                        {
                            label: 'option1',
                            description: 'description1',
                            value: 'select1',
                        },
                        {
                            label: 'option2',
                            description: 'description2',
                            value: 'select2',
                        },
                        {
                            label: 'option3',
                            description: 'description3',
                            value: 'select3',
                        },
                    ]),
            );
        await interaction.reply({ content: 'here are select-menus...', components: [row] });

        const filter = (interaction) => {
            return interaction.customId === 'select';
        };

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            time: 60 * 1000,
        });

        collector.on('collect', async (interaction) => {
            if (interaction.customId === 'select') {
                console.log(interaction.values);
            }
        });
    },
};