import {
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    ContextMenuCommandBuilder,
} from '@discordjs/builders';
import {
    CommandInteraction,
    ChatInputCommandInteraction,
    UserContextMenuCommandInteraction,
    MessageContextMenuCommandInteraction,
} from 'discord.js';

export interface Command {
    data:
        | Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>
        | SlashCommandSubcommandsOnlyBuilder
        | ContextMenuCommandBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}

// export interface ContextMenuCommand {
//     data: ContextMenuCommandBuilder;
//     run: (
//         interaction:
//             | UserContextMenuCommandInteraction
//             | MessageContextMenuCommandInteraction
//     ) => void;
// }

// export interface SlashCommand {
//     data:
//         | Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>
//         | SlashCommandSubcommandsOnlyBuilder;
//     run: (interaction: ChatInputCommandInteraction) => void;
// }
