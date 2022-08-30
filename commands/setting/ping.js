const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'ping',
    desc: "Узнать текущую задержку бота",
    use: "ping",
    category: ":gear: Основные",

    async execute(message, client, args) {
        let pingEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Соединения Kayami с серверами Discord`)
            .setDescription(`Пинг Discord API: ${client.ws.ping} ms. \nПинг бота: ${Date.now() - message.createdTimestamp} ms.`)

        message.channel.send({ embeds: [pingEmbed] });
    }
}
