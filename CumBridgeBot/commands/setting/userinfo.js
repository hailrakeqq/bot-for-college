const { MessageEmbed } = require("discord.js"),
    moment = require('moment');
const config = require('../../config.json')
const prefix = config.prefix
module.exports = {
    name: "userinfo",
    desc: "Команда для получения информации о пользователе",
    use: "userinfo <@user>",
    category: ":gear: Основные",
    aliases: [],
    async execute(message, client, args) {
        let mb = message.member;
        if (message.mentions.members.size > 0) mb = message.mentions.members.first()
        let roleCount = await mb.roles.cache.map(x => "<@&" + x.id + ">").join(" ");
        let joinDate = await moment(mb.joinedTimestamp).format('MMMM Do YYYY, HH:mm:ss');
        let createDate = await moment(mb.user.createdTimestamp).format('MMMM Do YYYY, HH:mm:ss');

        let embed = new MessageEmbed()
            .setAuthor({ name: mb.user.tag })
            .setThumbnail(mb.user.displayAvatarURL({ dynamic: true }))
            .addFields([
                {
                    name: `Пользователь`,
                    value: `${mb.user} [${mb.user.id}]`,
                    inline: false
                },
                {
                    name: `Создан`,
                    value: createDate,
                    inline: false
                },
                {
                    name: `Присоединился`,
                    value: joinDate,
                    inline: false
                },
                {
                    name: `Роли`,
                    value: roleCount,
                    inline: false
                }]
            )
            .setColor(config.color)
            .setFooter({ text: `Используйте ${prefix}userinfo <user> что бы узнать о пользователе больше!` })
        return message.channel.send({ embeds: [embed] })
    },
    admin: false
}

