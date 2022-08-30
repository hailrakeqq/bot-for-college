const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "skip",
    desc: "Пропустить песню",
    use: "skip/skip all",
    category: ":musical_note:  Музыка",
    async execute(message, client, args) {
        let emptyQueueEmbed = new MessageEmbed().setColor(`#8f40ff`)
        const channel = message.member.voice.channel;
        if (!channel) message.channel.send("Чтобы использовать эту команду вы должны находиться в голосовом канале")
        if (args[0] == 'all') {
            distube.stop(message).then(() => {
                message.channel.send({
                    embeds: [emptyQueueEmbed.setTitle("Очередь закончилась")
                        .setDescription(`Чтобы добавить что то в очередь используйте \n\`play <url> или текст\``)
                        .setTimestamp()
                    ]
                })
            })
        }
        distube.skip(message).catch(() => {
            distube.stop(message).then(() => {
                message.channel.send({
                    embeds: [emptyQueueEmbed.setTitle("Очередь закончилась")
                        .setDescription(`Чтобы добавить что то в очередь используйте \n\`play <url> или текст\``)
                        .setTimestamp()
                    ]
                })
            })
        })

    }
}