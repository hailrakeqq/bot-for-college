module.exports = {
    name: "leave",
    desc: "Отключить бота от голосового канала",
    use: "leave",
    category: ":musical_note:  Музыка",
    async execute(message, client, args) {
        const channel = message.member.voice.channel;
        if (!channel) message.channel.send("Чтобы использовать эту команду вы должны находиться в голосовом канале")
        distube.voices.get(message)?.leave()
    }
}