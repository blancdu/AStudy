import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';
import { IntentOptions, PartialOptions } from "./config/ClientOptions";

(async () => {
    const client = new Client({ intents: IntentOptions, partials: PartialOptions });

    // client.commands = new Collection();
    // const commandsPath = path.join(__dirname, 'commands');
    // const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    // for (const file of commandFiles) {
    //     const filePath = path.join(commandsPath, file);
    //     const command = require(filePath);
    //     client.commands.set(command.data.name, command);
    // }

    // // Event handling
    // const eventsPath = path.join(__dirname, 'events');
    // const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    // for (const file of eventFiles) {
    //     const filePath = path.join(eventsPath, file);
    //     const event = require(filePath);
    //     if (event.once) {
    //         client.once(event.name, (...args) => event.execute(...args));
    //     }
    //     else {
    //         client.on(event.name, (...args) => event.execute(...args));
    //     }
    // }

    // // Custom event handling
    // client.events = new Collection();
    // const customEventsPath = path.join(__dirname, 'events', 'custom');
    // const customEventFiles = fs.readdirSync(customEventsPath).filter(file => file.endsWith('.js'));

    // for (const file of customEventFiles) {
    //     const filePath = path.join(customEventsPath, file);
    //     const customEvent = require(filePath);
    //     client.events.set(customEvent.name, customEvent);
    // }

    // Bot start
    await client.login(process.env.DISCORD_BOT_TOKEN);
})();
const a: String = "abc";




