const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "getlog",
    desc: "вывод записи по id",
    use: "getlog <id>",
    category: ":desktop: Взаимодействие с Базой данных",
    aliases: [],
    async execute(message, client, args) {
        let id = Number.parseInt(args[0])
        if (id == null) return meassage.channel.send(`Вы не указали id записи`)
        const post = await prisma.testDev.update({
            where: { id: id },
            data: { published: true },
        })
        message.channel.send(post)
        console.log(post)
    }
} 