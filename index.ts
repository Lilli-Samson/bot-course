let localConfig: any;
try {
    localConfig = require("./localConfig");
} catch (e) {
    console.error(`Failed loading config: ${e}`);
}

import * as DiscordJS from "discord.js";
const client = new DiscordJS.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const server_id = localConfig.SERVER;

client.on("ready", () => {
});

client.on("message", (message) => {
});

client.login(localConfig.TOKEN);
