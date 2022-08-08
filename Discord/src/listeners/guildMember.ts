import { Client, GuildMember, PartialGuildMember } from 'discord.js';

export default (client: Client): void => {
    client.on('guildMemberAdd', async (member: GuildMember) => {
        //
        await memberCount(member);
    });
    client.on(
        'guildMemberRemove',
        async (member: GuildMember | PartialGuildMember) => {
            //
            await memberCount(member as GuildMember);
        }
    );
};

export const memberCount = async (member: GuildMember): Promise<void> => {
    const guild = member.guild;
    if (guild.available) {
        const memberCountChannel = guild.channels.cache.get(
            '1007133839564488817'
        );
        await memberCountChannel!.setName(`${guild.memberCount} Members`);
    }
};
