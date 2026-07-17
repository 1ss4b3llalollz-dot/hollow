const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const VOICE_CHANNEL_ID = "1527580003695329331";

client.once("ready", () => {
  console.log(`Online ca ${client.user.tag}`);

  // Streaming status
  client.user.setPresence({
    status: "online",
    activities: [{
      name: "Wreck",
      type: 1,
      url: "https://www.twitch.tv/discord"
    }]
  });

  // Intră pe canalul vocal
  const channel = client.channels.cache.get(VOICE_CHANNEL_ID);

  if (!channel) {
    console.log("Nu găsesc canalul vocal!");
    return;
  }

  joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator
  });

  console.log("Am intrat pe voice!");
});

client.login(TOKEN);
