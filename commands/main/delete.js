const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "delete",
    desc: "Удаляет запись в бд по id",
    use: "delete <id>",
    category: ":desktop: Взаимодействие с Базой данных",
    aliases: [],
    async execute(message, client, args) {
        let findLesson = args[0]
        let successEmbed = new MessageEmbed()
            .setColor('GREEN').setDescription(`Вы успешно удалили запись с именем: ${findLesson}`)
        let errorEmbed = new MessageEmbed().setColor('RED');

        if (findLesson == undefined) return message.channel.send({
            embeds: [errorEmbed.setDescription(`Вы не ввели название дисциплины, или ввели неправельное`)]
        })
        else {
            try {
                await prisma.Main.delete({ where: { name: `${findLesson}` } })
                return message.channel.send({ embeds: [successEmbed] });
            } catch (e) { console.log(e) }
        }
    }
}