const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    description: 'play',
    usage: 'play',
    voiceChannel: true,
    options: [
        {
            name: "search",
            description: "Der Songlink oder Songname",
            type: 3,
            required: true
        }
    ],

    async execute(client, message, args) {
        if (!args[0])
            return message.reply({ content: `❌ | Geben Sie den Namen der Musik ein, die Sie suchen möchten.`, allowedMentions: { repliedUser: false } });

        const results = await client.player.search(args.join(' '))
            .catch((error) => {
                console.log(error);
                return message.reply({ content: `❌ | Der Dienst hat einige Probleme, bitte versuchen Sie es erneut.`, allowedMentions: { repliedUser: false } });
            });

        if (!results || !results.hasTracks())
            return message.reply({ content: `❌ | Keine Ergebnisse gefunden.`, allowedMentions: { repliedUser: false } });

        const queue = await client.player.nodes.create(message.guild, {
            metadata: {
                channel: message.channel,
                client: message.guild.members.me,
                requestedBy: message.user
            },
            selfDeaf: true,
            leaveOnEmpty: client.config.autoLeave,
            leaveOnEnd: client.config.autoLeave,
            leaveOnEmptyCooldown: client.config.autoLeaveCooldown,
            leaveOnEndCooldown: client.config.autoLeaveCooldown,
            volume: client.config.defaultVolume,
        });

        try {
            if (!queue.connection)
                await queue.connect(message.member.voice.channel);
        } catch (error) {
            console.log(error);
            if (!queue || !queue.deleted) queue?.delete();
            return message.reply({ content: `❌ | Ich kann dem Audiokanal nicht beitreten.`, allowedMentions: { repliedUser: false } });
        }

        results.playlist ? queue.addTrack(results.tracks) : queue.addTrack(results.tracks[0]);

        if (!queue.isPlaying())
            await queue.node.play();

        return message.react('👍');
    }
};