const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "delete",
    desc: "Удаляет запись в бд по id",
    use: "delete <id>",
    category: ":desktop: Взаимодействие с Базой данных",
    aliases: [],
    async execute(message, client, args) {
        let id = Number.parseInt(args[0])
        let successEmbed = new MessageEmbed()
            .setColor('GREEN').setDescription(`Вы успешно удалили запись с id: ${id}`)
        let errorEmbed = new MessageEmbed().setColor('RED');

        if (id == 0 || id != Number) return message.channel.send({
            embeds: [errorEmbed.setDescription(`Вы не ввели число, или ввели неправальное\nВозможно записи с id: ${id} не существует`)]
        })
        else {
            try {
                await prisma.testDev.delete({ where: { id } })
                return message.channel.send({ embeds: [successEmbed] });
            } catch (e) {
                console.log(e)
                message.channel.send({ embeds: [errorEmbed.setDescription(`Удалить запись не удалось (возможно записи с id: \`${id}\` не существует)`)] })
            }
        }
    }
}