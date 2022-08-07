import {
    CommandInteraction,
    UserContextMenuCommandInteraction,
    ContextMenuCommandBuilder,
    ApplicationCommandType,
} from 'discord.js';
import { Command } from '../../interfaces/Command';

export const InviteStudy: Command = {
    data: new ContextMenuCommandBuilder()
        .setName('스터디초대')
        .setType(ApplicationCommandType.User),
    run: async (interaction: CommandInteraction) => {
        if (!interaction.isUserContextMenuCommand()) return;
        const i = interaction as UserContextMenuCommandInteraction;
        const tag = i.targetUser.tag;
        const content = `${tag}님을 ??스터디로 초대합니다!`;
        await i.reply({
            ephemeral: true,
            content,
        });
    },
};
