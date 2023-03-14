const embed = require('../embeds/embeds');


module.exports = {
    name: 'save',
    aliases: [],
    description: 'Save the current song',
    usage: 'save',
    voiceChannel: true,
    options: [],

    async execute(client, message) {
        const queue = client.player.nodes.get(message.guild.id);

        if (!queue || !queue.isPlaying())
            return message.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt!. `, allowedMentions: { repliedUser: false } });


        const track = queue.currentTrack;
        const timestamp = queue.node.getTimestamp();
        const trackDuration = timestamp.progress == 'für immer' ? 'Endlos (Live)' : track.duration;
        let description = `Author : **${track.author}**\nDauer **${trackDuration}**`;

        message.author.send({ embeds: [embed.Embed_save(track.title, track.url, track.thumbnail, description)] })
            .then(() => {
                message.react('👍');
            })
            .catch(error => {
                console.log('error: ' + error);
                message.react('❌');
            });
    },

    async slashExecute(client, interaction) {
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue || !queue.isPlaying())
            return interaction.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt!.`, allowedMentions: { repliedUser: false } });


        const track = queue.currentTrack;
        const timestamp = queue.node.getTimestamp();
        const trackDuration = timestamp.progress == 'für immer' ? 'Endlos (Live)' : track.duration;
        let description = `Author : **${track.author}**\nDauer **${trackDuration}**`;

        interaction.user.send({ embeds: [embed.Embed_save(track.title, track.url, track.thumbnail, description)] })
            .then(() => {
                interaction.reply("✅ | Musik gesendet.")
            })
            .catch(error => {
                console.log('error: ' + error);
                interaction.reply("❌ | Ich kann dir die Musik nicht schicken.")
            });
    },
};