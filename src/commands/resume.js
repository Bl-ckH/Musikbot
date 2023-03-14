module.exports = {
    name: 'resume',
    aliases: [],
    description: 'Resume paused song',
    usage: 'resume',
    voiceChannel: true,
    options: [],

    execute(client, message) {
        const queue = client.player.nodes.get(message.guild.id);

        if (!queue)
            return message.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt.`, allowedMentions: { repliedUser: false } });

        const success = queue.node.resume();
        return success ? message.react('▶️') : message.reply({ content: `❌ | Etwas ist schief gelaufen.`, allowedMentions: { repliedUser: false } });
    },

    slashExecute(client, interaction) {
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue)
            return interaction.reply({ content: `❌ | Es wird derzeit keine Musik abgespielt.`, allowedMentions: { repliedUser: false } });

        const success = queue.node.resume();
        return success ? interaction.reply("▶️ | Musik wieder aufgenommen.") : interaction.reply({ content: `❌ | Etwas ist schief gelaufen.`, allowedMentions: { repliedUser: false } });
    },
};