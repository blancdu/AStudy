import {
    Client,
    CommandInteraction,
    ChatInputCommandInteraction,
    ContextMenuCommandInteraction,
    BaseInteraction,
    InteractionType,
    UserContextMenuCommandInteraction,
    MessageContextMenuCommandInteraction,
    ApplicationCommandType,
} from 'discord.js';
import { Commands } from '../commands/Commands';

export default (client: Client): void => {
    client.on('interactionCreate', async (interaction: BaseInteraction) => {
        if (interaction.type === InteractionType.ApplicationCommand) {
            await handleCommand(interaction as CommandInteraction);
        } else if (interaction.type === InteractionType.MessageComponent) {
            // MessageComponent
        } else if (
            interaction.type === InteractionType.ApplicationCommandAutocomplete
        ) {
            // Autocomplete
        } else if (interaction.type === InteractionType.ModalSubmit) {
            // Modal
        }
    });
};

const handleCommand = async (
    interaction: CommandInteraction
): Promise<void> => {
    for (const Command of Commands) {
        if (interaction.commandName === Command.data.name) {
            await Command.run(interaction);
            break;
        }
    }
};
