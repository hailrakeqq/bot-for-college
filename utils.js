module.exports.embed = embed
module.exports.rolechecker = RoleChecker
module.exports.splitnum = SplitNumber
module.exports.toHHMMSS = ToHHMMSS
module.exports.nowDate = nowDate
module.exports.fetchCmdList = fetchCmdList
const { createAudioResource, createAudioPlayer, getVoiceConnection, joinVoiceChannel, AudioPlayerStatus } = require('@discordjs/voice');
const DiscordJS = require('discord.js')
const config = require('./config.json')
const { MessageEmbed } = require("discord.js");

async function fetchCmdList(message, client, args) {
    let embed = new MessageEmbed()
        .setAuthor({ name: `Kayami Bot Help List`, iconURL: client.user.displayAvatarURL() })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))//'https://cdn.discordapp.com/avatars/957673942909349989/e11524bec7a52bb05c41f9fdd072a6b9.webp?size=4096'
        .addFields({ name: '\u200b', value: '\u200b' })
        .setColor("#ff2474")
        .setFooter({ text: `Используйте ${config.prefix}help <command> что бы узнать о команде больше!` })
    let catList = []
    let category = client.commands.map(x => x.category)
    for (let i = 0; i < category.length; i++) {
        if (!catList.includes(category[i])) {
            catList.push(category[i])
            let cmdList = await client.commands
                .filter(x => x.category === category[i])
                .map(x => x.name)
                .join(", ")
            embed.addFields({ name: `${category[i]}`, value: `\`\`\`${cmdList}\`\`\`` })
        }
    }
    return message.channel.send({ embeds: [embed] })
}


function embed(message, color, msg, author, footer, time, img) {
    if (typeof msg !== 'string') msg = null
    if (typeof author !== 'boolean') author = false
    if (typeof footer !== 'string') footer = null
    if (typeof time !== 'boolean') time = false
    if (typeof img !== 'string' || !isUrl(img)) img = null

    let panel = new DiscordJS.MessageEmbed().setColor(color)
    if (msg !== null) panel.setDescription(msg)
    if (author) panel.setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
    if (time) panel.setTimestamp()
    if (footer !== null) panel.setFooter(footer)
    if (img !== null) panel.setThumbnail(img)

    message.reply({ embeds: [panel] })
}

function RoleChecker(member, user, list) {
    let arr1 = [], arr2 = [], roles1 = member?.roles.cache.map(r => r.id), roles2 = user?.roles.cache.map(r => r.id)
    list.forEach(val => {
        if (roles1.includes(val)) return arr1.push(true)
        arr1.push(false)
    })

    list.forEach(val => {
        if (roles2.includes(val)) return arr2.push(true)
        arr2.push(false)
    })

    if (arr1.includes(true) && (!arr2.includes(true) || arr1.indexOf(true) < arr2.indexOf(true))) {
        return true
    } else {
        return false
    }
}

function SplitNumber(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}
function ToHHMMSS(second) {
    let minute = 0, hour = 0, result

    if (second > 60) {
        minute = parseInt(second / 60)
        second = parseInt(second % 60)
        if (minute > 60) {
            hour = parseInt(minute / 60)
            minute = parseInt(minute % 60)
        }
    }

    result = second >= 10 ? "" + parseInt(second) : "" + "0" + parseInt(second)
    result = minute >= 10 ? "" + parseInt(minute) + ":" + result : "" + "0" + parseInt(minute) + ":" + result
    result = hour >= 10 ? "" + parseInt(hour) + ":" + result : "" + "0" + parseInt(hour) + ":" + result

    return result;
}
function nowDate() { return Math.round(Date.now() / 1000) }
