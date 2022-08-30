const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "stop",
    desc: "Остановить музыку и очистить очередь",
    use: "stop",
    category: ":musical_note:  Музыка",
    async execute(message, client, args) {
        let prefix = (await GuildModel.findOne({ id: message.guild.id })).prefix
        const stopEmbed = new MessageEmbed().setColor('#572e3a')
            .setTitle(`Пользователь ${message.member.displayName} остановил музыку`)
            .setDescription(`Чтобы добавить музыку в очередь используйте\n\`${prefix}play <url> или текст\``)
        const channel = message.member.voice.channel;
        if (!channel) message.channel.send("Чтобы использовать эту команду вы должны находиться в голосовом канале")
        distube.stop(message)
        message.channel.send({ embeds: [stopEmbed] })
    }
}