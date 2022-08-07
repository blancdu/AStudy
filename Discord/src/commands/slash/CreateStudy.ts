import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    GuildCreateOptions,
    PermissionsBitField,
    Role,
    GuildMember,
    GuildChannelCreateOptions,
    ChannelType,
    CommandInteraction,
} from 'discord.js';
import { Command } from '../../interfaces/Command';

export const CreateStudy: Command = {
    data: new SlashCommandBuilder()
        .setName('스터디생성')
        .setDescription('스터디를 생성합니다.')
        .addStringOption((option) =>
            option
                .setName('스터디명')
                .setDescription('스터디명을 입력하세요')
                .setRequired(true)
        ),
    run: async (interaction: CommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;
        const i = interaction as ChatInputCommandInteraction;

        const studyName = (await i.options.getString('스터디명')) as string;
        const member = i.member as GuildMember;

        const role = await i.guild!.roles.create({
            name: studyName,
            reason: 'Creating new role by Bot',
        } as GuildCreateOptions);
        const permissionOverwrites = [
            {
                id: i.guild!.id,
                deny: [PermissionsBitField.Flags.ViewChannel],
            },
            { id: role.id, allow: [PermissionsBitField.Flags.ViewChannel] },
        ];
        // 롤 부여
        await member.roles.add(role.id);

        // 카테고리 생성
        const category = await i.guild!.channels.create({
            name: studyName,
            type: ChannelType.GuildCategory,
            permissionOverwrites,
        });
        // 텍스트 채널 생성
        await i.guild!.channels.create({
            name: studyName,
            type: ChannelType.GuildText,
            parent: category,
            permissionOverwrites,
        });
        // 음성 채널 생성
        await i.guild!.channels.create({
            name: studyName,
            type: ChannelType.GuildVoice,
            parent: category,
            permissionOverwrites,
        });

        await i.reply({
            ephemeral: true,
            content: `스터디 생성 완료 : ${studyName}`,
        });
    },
};
