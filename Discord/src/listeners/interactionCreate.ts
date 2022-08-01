import { Client, CommandInteraction, BaseInteraction, InteractionType } from "discord.js";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: BaseInteraction) => {
        if (interaction.type === InteractionType.ApplicationCommand) {
            await handleSlashCommand(client, interaction as CommandInteraction);
        }
        else if (interaction.type === InteractionType.MessageComponent) {
            // MessageComponent
        }
        else if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
            // Autocomplete
        }
        else if (interaction.type === InteractionType.ModalSubmit) {
            // Modal
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    // handle slash command here
};