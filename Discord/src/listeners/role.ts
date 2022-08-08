import { Client, Role } from 'discord.js';

export default (client: Client): void => {
    client.on('roleCreate', async (role: Role) => {
        //
        await studyCount(role);
    });
    client.on('roleDelete', async (role: Role) => {
        //
        await studyCount(role);
    });
};

const studyCount = async (role: Role): Promise<void> => {
    const guild = role.guild;
    if (guild.available) {
        const studyCountChannel = guild.channels.cache.get(
            '1007133970208673803'
        );
        const studyCount = guild.roles.cache.size;
        await studyCountChannel!.setName(`${studyCount} Studies`);
    }
};
