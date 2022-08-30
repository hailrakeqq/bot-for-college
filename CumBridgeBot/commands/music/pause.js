const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "pause",
    desc: "Возобновить музыку",
    use: "pause",
    category: ":musical_note:  Музыка",
    async execute(message, client, args) {
        let prefix = (await GuildModel.findOne({ id: message.guild.id })).prefix
        let pauseEmbed = new MessageEmbed().setColor("GREEN").setTitle("Пауза")
            .setDescription(`Чтобы возобновить музыку используйте \`${prefix}resume\``)
        const channel = message.member.voice.channel;
        if (!channel) message.reply("Чтобы использовать эту команду вы должны находиться в голосовом канале")
        distube.pause(message)
        message.channel.send({ embeds: [pauseEmbed] })
    }
}