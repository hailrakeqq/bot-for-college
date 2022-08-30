const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "queue",
    desc: "Получить названия всех песен, которые находятся в очереди",
    use: "queue",
    category: ":musical_note:  Музыка",
    aliases: [],
    async execute(message, client, args) {
        let prefix = (await GuildModel.findOne({ id: message.guild.id })).prefix
        let embed = new MessageEmbed().setColor("PURPLE");
        const queue = distube.getQueue(message)
        const channel = message.member?.voice?.channel
        let emptyQueueEmbed = new MessageEmbed().setColor('#2e0070')
        if (!channel) {
            embed.setTitle("Чтобы использовать эту команду вы должны находиться в голосовом канале");
            return message.channel.send({ embeds: [embed] });
        }
        if (!queue) {
            embed.setTitle(`В очереди ничего нет что бы добавить песню в очередь используйте \`${prefix}play < url > или текст\``);
            return message.channel.send({ embeds: [embed] });
        } else {
            embed.setTitle(`Очередь`)
            embed.setDescription(
                `${queue.songs
                    .map((song, index) => index + 1 + ". " + song.name + ` - ` + song.formattedDuration)
                    .join("\n\n")}`,
                { split: true }
            );
            embed.setThumbnail(client.user.displayAvatarURL())
            message.channel.send({ embeds: [embed] });
        }
    }
}
