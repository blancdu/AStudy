import { Client } from "discord.js";
import { Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import {Commands} from "../commands/Commands"

import  env  from '../utils/env';
const { client_id, guild_id, bot_token } = env.discord;


export default (client: Client): void => {
    client.on("ready", async () => {

        const rest = new REST({ version: '10' }).setToken(bot_token);
        const commandData = Commands.map((command) => command.data.toJSON());
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(
                Routes.applicationGuildCommands(client_id, guild_id),
                { body: commandData },
            );
            console.log('Successfully reloaded application (/) commands.');
        }
        catch (error) {
            console.error(error);
        }
        console.log(`Ready! Logged in as ${client.user?.tag}`);
    });
};