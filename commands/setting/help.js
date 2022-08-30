const { MessageEmbed } = require("discord.js");
const { fetchCmdList } = require('../../utils');
const cfg = require("../../config.json")
module.exports = {
    name: "help",
    desc: "Команда для помощи по командам",
    use: "help [command]",
    category: ":gear: Основные",
    aliases: [],

    async execute(message, client, args) {
        if (!args[0]) {
            return fetchCmdList(message, client, args)
        } else {
            const commd = client.commands.get(args[0].toLowerCase())
            if (!commd) {
                return message.channel.send(`Не удалось найти команду: \`${args[0]}\``)
            }
            let embed = new MessageEmbed()
                .setTitle(`Команда ${commd.name}: `)
                .setDescription(`**Description: ** ${commd.desc}\n**Usage: ** \`${prefix}${commd.use}\``)
                .setColor("#ff2474")

            return message.channel.send({ embeds: [embed] })
        }
    },
    admin: false
}