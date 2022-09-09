module.exports = {
    name: "setprefix",
    desc: "Команда для сменны префикса",
    use: "setprefix [prefix]",
    category: ":gear: Основные",
    aliases: [],

    async execute(message, client, args) {
        try {
            if (!args[0]) {
                let content = `${message.guild.name}'s prefix is:` + "`" + prefix + "`" + `\n\nTo set up a new prefix use ` + "`" + prefix + "setprefix [prefix]`"
                return message.channel.send(content)
            }

            if (args[0].length > 5) {
                let content = `Префикс не может быть длиннее 5ти символов!! \`\`\n\`\`\`${prefix}setprefix [prefix]\`\`\``
                return message.channel.send(content)
            }

            prefix = args[0];
            JSON.stringify({ "prefix": args[0] })

            let content = `Префикс обновлен на -> ` + "`" + args[0] + "`"
            return message.channel.send(content)
        } catch (error) { console.log(error); }
    },
    admin: true,
}