const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "create",
    desc: "Использовать строго по примеру, иначе ошибка",
    use: "create <title> ; <content> ; <time> ;",
    category: ":desktop: Взаимодействие с Базой данных",
    aliases: [],
    async execute(message, client, args) {
        let errorEmbed = new MessageEmbed().setColor("RED");
        let title = []
        let content = []
        let time = []
        let i = 0
        if (args[0] != null) {
            while (args[i] != ';') {
                title.push(args[i])
                i++;
            }
            i++;
            while (args[i] != ';') {
                content.push(args[i])
                i++;
            }
            i++;
            while (args[i] != ';') {
                time.push(args[i].toString())
                i++;
            }
            i = 0;
            recordCountId++

            await prisma.testDev.create({
                data: {
                    title: `${title}`,
                    content: `${content}`,
                    time: `${time}`,
                    published: true,
                    author: message.member.user.tag
                },
            })
            message.channel.send(`Запись создана в базу данных с id: ${recordCountId}`)
        } else message.channel.send({
            embeds: [errorEmbed
                .setTitle(`:x: Ошибка добавления записи в базу данных`)
                .setDescription(`Используйте ${prefix}help create для помощи по команде`)
            ]
        })
    }
}
