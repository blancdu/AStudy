import path from 'path';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: path.join(__dirname, '../../.env.production') });
} else if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: path.join(__dirname, '../../.env.test') });
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: path.join(__dirname, '../../.env.development') });
} else {
    throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!');
}

if (!process.env.DATABASE_HOST) {
    throw new Error('Missing DB host');
}
if (!process.env.DISCORD_CLIENT_ID) {
    throw new Error('Missing discord client ID');
}
if (!process.env.DISCORD_BOT_TOKEN) {
    throw new Error('Missing discord bot token');
}
if (!process.env.DISCORD_GUILD_ID) {
    throw new Error('Missing discord guild ID.');
}

const env = {
    node_env: process.env.NODE_ENV as string,
    database: {
        host: process.env.DATABASE_HOST as string,
        port: parseInt(process.env.DATABASE_PORT as string),
        username: process.env.DATABASE_USERNAME as string,
        password: process.env.DATABASE_PASSWORD as string,
        name: process.env.DATABASE_NAME as string,
    },
    discord: {
        client_id: process.env.DISCORD_CLIENT_ID as string,
        bot_token: process.env.DISCORD_BOT_TOKEN as string,
        guild_id: process.env.DISCORD_GUILD_ID as string,
    },
};
export default env;
