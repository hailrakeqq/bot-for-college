module.exports = {
    name: "setprefix",
    desc: "Команда для сменны префикса",
    use: "setprefix [prefix]",
    category: ":gear: Основные",
    aliases: [],

    async execute(message, client, args) {
        try {
            let Guild = (await GuildModel.findOne({ id: message.guild.id }))//!client.db.prefix ? cfg.prefix : client.db.prefix
            if (!args[0]) return message.channel.send(`префикс: ` + "`" + Guild.prefix + "`" + `\n для смены префикса используйте ` + "`" + Guild.prefix + "setprefix [prefix]" + "`")
            if (args[0].length >= 5) return message.channel.send("`" + "Невозможно установить префикс, убедитесь что длинна не привышает 5 символов" + "`")

            await GuildModel.updateOne({ id: message.guild.id }, { prefix: args[0] })
            return message.channel.send(`Префикс успешно изменен на ` + "`" + args[0] + "`")
        } catch (error) { console.log(error); }
    },
    admin: true,
}