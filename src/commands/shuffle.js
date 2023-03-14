module.exports = {
    name: 'shuffle',
    aliases: ['random'],
    description: 'Shuffle Playlist',
    usage: 'random',
    voiceChannel: true,
    options: [],

    async execute(client, message) {
        const queue = client.player.nodes.get(message.guild.id);

        if (!queue || !queue.isPlaying())
            return message.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt!.`, allowedMentions: { repliedUser: false } });

        queue.tracks.shuffle();
        return message.react('👍');
    },

    slashExecute(client, interaction) {
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue || !queue.isPlaying())
            return interaction.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt!.`, allowedMentions: { repliedUser: false } });

        queue.tracks.shuffle();
        return interaction.reply('✅ | Musik gemischt.');
    },
};