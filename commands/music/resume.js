const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "resume",
    desc: "Возобновить музыку",
    use: "resume",
    category: ":musical_note:  Музыка",
    async execute(message, client, args) {
        const resumeEmbed = new MessageEmbed().setColor('GREEN')
            .setTitle(`:white_check_mark: Возобновление воспроизведения музыки, приятного прослушивания ^-^`)
        const channel = message.member.voice.channel;
        if (!channel) message.reply("Чтобы использовать эту команду вы должны находиться в голосовом канале")
        distube.resume(message)
        message.channel.send({ embeds: [resumeEmbed] })
    }
}