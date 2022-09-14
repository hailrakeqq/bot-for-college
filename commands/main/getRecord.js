const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "getrecord",
    desc: "Отправляет записи с базы данных пользователю в лс\nНазва всіх дисциплін\nos\nmath\neconomy\npractice\nksm\nComputer electronics - ce\nComputer architecture - ca",
    use: "getrecord <Назва Дисципліни>",
    category: ":desktop: Взаимодействие с Базой данных",
    aliases: [],
    async execute(message, client, args) {
        let findLesson = args[0]
        if (findLesson == undefined) return message.channel.send(`Ошибка!!! вы не ввели название дисциплины`)
            .then(message => { message.delete({ timeout: 5000 }) })
        else {
            const allRecord = await prisma.Main.findMany({
                where: { name: `${findLesson}` }
            })
            let name = allRecord[0].name
            let title = allRecord[0].title
            let content = allRecord[0].content
            let time = allRecord[0].time
            let embed = new MessageEmbed()
                .addFields([
                    {
                        name: `Предмет:`,
                        value: `${name}`,
                        inline: false
                    },
                    {
                        name: `Title`,
                        value: `${title}`,
                        inline: false
                    },
                    {
                        name: `Сделать до`,
                        value: `${time}`,
                        inline: false
                    },
                    {
                        name: `Задание`,
                        value: content,
                        inline: false
                    }]
                )
                .setColor('RANDOM')
            try {
                return await message.member.send({ embeds: [embed] }).catch(console.error)
            } catch (error) {
                console.log(error)
            }
        }
    }
} 