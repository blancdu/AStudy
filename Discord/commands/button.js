const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

// deploy slash command
const data = new SlashCommandBuilder()
    .setName('button')
    .setDescription('Replies with button!');

// button attributes
const buttons = [
    {
        customId: 'primary',
        label: 'Primary',
        style: 'PRIMARY',
        emoji: '',
        url: '',
        disabled: false,
        async execute(interaction) {
            await interaction.reply('clicked primary button');
        },
    },
    {
        customId: 'secondary',
        label: 'Secondary',
        style: 'SECONDARY',
        emoji: '',
        url: '',
        disabled: false,
        async execute(interaction) {
            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://discord.js.org')
                .setDescription('Some description here');
            await interaction.update({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [] });
        },
    },
];

module.exports = {
    data: data,
    async execute(interaction) {
        // reply slash command
        const row = new MessageActionRow()
            .addComponents(
                buttons.map((button) => {
                    return new MessageButton()
                        .setCustomId(button.customId)
                        .setLabel(button.label)
                        .setStyle(button.style)
                        .setEmoji(button.emoji)
                        .setURL(button.url)
                        .setDisabled(button.disabled);
                }),
            );
        await interaction.reply({ content : 'here are buttons~', components: [row] });

        // button event handling
        const filter = (interaction) => {
            return buttons.filter(
                button => button.customId === interaction.customId,
            );
        };
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15 * 1000 });

        // when a button clicked
        collector.on('collect', async (interaction) => {
            const button = buttons.find(
                b => b.customId === interaction.customId,
            );
            await button.execute(interaction);
        });

        // button timeout
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    },
};