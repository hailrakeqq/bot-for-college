module.exports = {
    name: "ready",
    async execute(client) {
        try {
            client.user.setPresence({
                activities: [{
                    name: "?help",
                    type: 2
                }]
            })
            await console.log(`Бот ${client.user.tag} Запущен!!!`)
        } catch (err) {
            console.log(err)
        }
    }
}