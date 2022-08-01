import { Client } from 'discord.js';
import { IntentOptions, PartialOptions } from './config/ClientOptions';
import env from './utils/env';
import { sequelize } from './db/models';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';

(async () => {
    console.log('Bot is starting...');

    const client = new Client({
        intents: IntentOptions,
        partials: PartialOptions,
    });

    ready(client);
    interactionCreate(client);

    try {
        await sequelize.authenticate();
        console.log('DB Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    await sequelize.sync({ force: true });

    // Bot start
    await client.login(env.discord.bot_token);
})();
