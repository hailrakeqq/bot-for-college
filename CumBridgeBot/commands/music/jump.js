const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'jump',
    desc: "Включить музыку за списком в очереди",
    use: "jump <число>",
    category: ":musical_note:  Музыка",
    aliases: [],
    async execute(message, client, args) {
        let fEmbed = new MessageEmbed().setColor("RED")
        distube.jump(message, parseInt(args[0], 10) - 1).catch(() => {
            message.channel.send({ embeds: [fEmbed.setTitle("Ошибка, нужно указать корректное число")] })
        })

    }
}