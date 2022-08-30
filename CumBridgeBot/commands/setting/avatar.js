const Discord = module.require("discord.js");
const fs = require("fs")
const { MessageEmbed, Guild } = require('discord.js');
module.exports = {
    name: "avatar",
    desc: "Команда для вывода авки пользователя",
    use: "avatar",
    category: ":gear: Основные",
    aliases: [],

    async execute(message, client, args) {
        let mb = message.member;
        if (message.mentions.members.size > 0) mb = message.mentions.members.first()
        let embed = new Discord.MessageEmbed()
            .setImage(mb.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setColor(mb.displayHexColor)
            .setFooter({ text: "Аватар пользователя " + mb.user.tag });

        message.channel.send({ embeds: [embed] });
    },
    admin: false
}