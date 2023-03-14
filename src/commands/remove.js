const embed = require('../embeds/embeds');


module.exports = {
    name: 'remove',
    aliases: ['r'],
    description: 'remove',
    usage: 'remove',
    voiceChannel: true,
    options: [],

    async execute(client, message) {
        const queue = client.player.nodes.get(message.guild.id);

        if (!queue || !queue.isPlaying())
            return message.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt.`, allowedMentions: { repliedUser: false } });


        const tracks = queue.tracks.map((track, index) => `${++index}. ${track.title}`);

        if (tracks.length < 1)
            return message.reply({ content: `❌ | Keine Musik in der Warteschlange nach Strom.`, allowedMentions: { repliedUser: false } });


        let nowplaying = `Es Läuft gerade : ${queue.currentTrack.title}\n\n`;
        let tracksQueue = '';

        if (tracks.length > 9) {
            tracksQueue = tracks.slice(0, 10).join('\n');
            tracksQueue += `\nund ${tracks.length - 10} andere Lieder`;
        }
        else {
            tracksQueue = tracks.join('\n');
        }

        const instruction = `Wählen Sie einen Song von **1** bis **${tracks.length}** aus, um ihn zu **entfernen**, oder geben Sie andere ein, um die Auswahl abzubrechen. ⬇️`;
        let loopStatus = queue.repeatMode ? (queue.repeatMode === 2 ? 'All' : 'ONE') : 'Off';
        await message.reply({ content: instruction, embeds: [embed.Embed_queue("Liste entfernen", nowplaying, tracksQueue, loopStatus)], allowedMentions: { repliedUser: false } });


        const collector = message.channel.createMessageCollector({
            time: 10000, // 10s
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {

            const index = parseInt(query.content);

            if (!index || index <= 0 || index > tracks.length) {
                return message.reply({ content: `✅ | Entfernen abgebrochen.`, allowedMentions: { repliedUser: false } })
                    && collector.stop();
            }

            collector.stop();
            await queue.node.remove(index - 1);

            query.reply({ embeds: [embed.Embed_remove("Musik entfernt", tracks[index - 1])], allowedMentions: { repliedUser: false } });
            return query.react('👍');
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time')
                return message.reply({ content: `❌ | Die Zeit zum Entfernen des Titels ist abgelaufen`, allowedMentions: { repliedUser: false } });
        });
    },

    async slashExecute(client, interaction) {
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue || !queue.isPlaying())
            return interaction.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt.`, allowedMentions: { repliedUser: false } });


        const tracks = queue.tracks.map((track, index) => `${++index}. ${track.title}`);

        if (tracks.length < 1)
            return interaction.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt.`, allowedMentions: { repliedUser: false } });


        let nowplaying = `Now Playing : ${queue.currentTrack.title}\n\n`;
        let tracksQueue = '';

        if (tracks.length > 9) {
            tracksQueue = tracks.slice(0, 10).join('\n');
            tracksQueue += `\nund ${tracks.length - 10} andere Songs`;
        }
        else {
            tracksQueue = tracks.join('\n');
        }

        const instruction = `Wählen Sie einen Song von **1** bis **${tracks.length}** aus, um ihn zu **entfernen**, oder geben Sie andere ein, um die Auswahl abzubrechen. ⬇️`;
        let loopStatus = queue.repeatMode ? (queue.repeatMode === 2 ? 'All' : 'ONE') : 'Off';
        await interaction.reply({ content: instruction, embeds: [embed.Embed_queue("Liste entfernen", nowplaying, tracksQueue, loopStatus)], allowedMentions: { repliedUser: false } });


        const collector = interaction.channel.createMessageCollector({
            time: 10000, // 10s
            errors: ['time'],
            filter: m => m.author.id === interaction.user.id
        });

        collector.on('collect', async (query) => {
            const index = parseInt(query.content);

            if (!index || index <= 0 || index > tracks.length) {
                return query.reply({ content: `✅ | Entfernen abgebrochen.`, allowedMentions: { repliedUser: false } })
                    && collector.stop();
            }

            collector.stop();
            await queue.node.remove(index - 1);

            query.reply({ embeds: [embed.Embed_remove("Musik entfernt", tracks[index - 1])], allowedMentions: { repliedUser: false } });
            return query.react('👍');
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time')
                return interaction.reply({ content: `❌ | Die Zeit zum Entfernen des Titels ist abgelaufen`, allowedMentions: { repliedUser: false } });
        });
    },
};