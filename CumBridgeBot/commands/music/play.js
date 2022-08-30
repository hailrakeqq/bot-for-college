const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "play",
    desc: "Воспроизведение музыки из YouTube, Spotify, Soundcloud в голосовом канале",
    use: "play <url> или текст",
    category: ":musical_note:  Музыка",
    aliases: [],

    async execute(message, client, args) {
        let prefix = (await GuildModel.findOne({ id: message.guild.id })).prefix
        let embed = new MessageEmbed().setColor("RED")
        const channel = message.member?.voice?.channel

        if (!channel) {
            embed.setTitle("Чтобы использовать эту команду вы должны находиться в голосовом канале")
            return message.channel.send({ embeds: [embed] });
        }

        if (!args.length) {
            embed.setTitle(`Используйте ${prefix}${this.use} !!!`)
            return message.channel.send({ embeds: [embed] });
        }
        distube.play(channel, args.join(' '), {
            message,
            textChannel: message.channel,
            member: message.member,
        })
    }
}
