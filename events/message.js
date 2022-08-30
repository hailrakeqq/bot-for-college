const { embed } = require('../utils');
const { Permissions } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        let { author, guild, channel, attachments, content, member } = message
        if (channel.type == `dm` || author.bot)
            return;
        if (content.match(new RegExp(`^${prefix}([a-zA-Z])`, 'g'))) {
            const args = content.slice(prefix.length).trim().split(/ +/)
            const command = args.shift().toLowerCase()

            let cmd = client.commands.find(c => c.name === command || (c.aliases?.includes(command)))
            if (!cmd) return embed(message, `0xa74949`, `**Данная команда не существует! Используйте \`${prefix}help\`**`, null, 15)

            try {
                console.log(`${command + args.length > 0 ? `[ ${args} ]` : ``}`)
                if (cmd.admin && !guild.members.cache.get(author.id).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed(message, `0xa74949`, `**У вас недостаточно прав на использование данной команды!**`, null, 15)
                cmd.execute(message, client, args)
            } catch (error) {
                console.error(error)
                return embed(message, `0xa74949`, `**Произошла ошибка во время выполнения команды!**`, null, 15)
            }
        }
    }
}