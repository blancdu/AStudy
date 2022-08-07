import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    CommandInteraction,
} from 'discord.js';
import { Command } from '../../interfaces/Command';

export const Hello: Command = {
    data: new SlashCommandBuilder()
        .setName('안녕')
        .setDescription('봇에게 인사합니다.'),
    run: async (interaction: CommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;
        const i = interaction as ChatInputCommandInteraction;

        const content = 'Hello there!';
        await i.reply({
            ephemeral: true,
            content,
        });
    },
};
