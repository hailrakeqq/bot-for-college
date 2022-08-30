const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'repeat',
    desc: "Повтор музыки в голосовом канале",
    use: `repeat 0 - чтобы выключить режим повтора\n repeat 1 - чтобы установить на повтор 1 трек\n repeat 2 - чтобы установить на повтор все треки`,
    category: ":musical_note:  Музыка",
    aliases: [],
    async execute(message, client, args) {
        let modeEmbed = new MessageEmbed().setColor("PURPLE")
        if (0 <= Number(args[0]) && Number(args[0]) <= 2) {
            distube.setRepeatMode(message, parseInt(args[0]))
            message.channel.send({ embeds: [modeEmbed.setTitle(`Режим повтора изменен на ${args[0].replace("0", "Выключен").replace("1", "Повтор одного трека").replace("2", "Повтор всех треков")}`)] })
        } else message.channel.send({ embeds: [modeEmbed.setTitle(`Ошибка`).setDescription(`Используйте ${this.use}`)] })
    }
}