import { Client } from 'discord.js';
import { Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Commands } from '../commands/Commands';

import env from '../utils/env';
const { client_id, guild_id, bot_token } = env.discord;

export default (client: Client): void => {
    client.on('ready', async () => {
        const rest = new REST({ version: '10' }).setToken(bot_token);
        const commandData = Commands.map((command) => command.data.toJSON());
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(
                Routes.applicationGuildCommands(client_id, guild_id),
                { body: commandData }
            );
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }

        const guild = client.guilds.cache.get('996048674872369192');
        if (guild!.available) {
            console.log(guild!.name);
            console.log('start to fetch channels...');
            await guild!.channels.fetch();

            console.log('start to fetch roles...');
            await guild!.roles.fetch();

            console.log('start to fetch members...');
            await guild!.members.fetch();
            console.log('fetching finished!');

            // channel name change (membercount, studycount)
            const memberCountChannel = guild!.channels.cache.get(
                '1007133839564488817'
            );
            const studyCountChannel = guild!.channels.cache.get(
                '1007133970208673803'
            );
            const studyCount = guild!.roles.cache.size;
            await memberCountChannel!.setName(`${guild!.memberCount} Members`);
            await studyCountChannel!.setName(`${studyCount} Studies`);
        }

        console.log(`Ready! Logged in as ${client.user?.tag}`);
    });
};
