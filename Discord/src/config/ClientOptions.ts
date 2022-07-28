import { GatewayIntentBits, Partials } from "discord.js";

export const IntentOptions : Array<GatewayIntentBits> = [
    GatewayIntentBits.Guilds,
];
export const PartialOptions : Array<Partials> = [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
];