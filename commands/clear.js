const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });

module.exports = {
    name: 'limpar',
    description: 'Limpe as mensagens de um chat. 🔴',
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {

        let numero = 50 + 49

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            interaction.reply({ content: `<:errado1:1066123250444284035> | Você não possui permissão para utilizar este comando`, ephemeral: true })
        } else


            if (parseInt(numero) > 99 || parseInt(numero) <= 0) {

            } else {

                interaction.channel.bulkDelete(parseInt(numero))

                let embed = new Discord.MessageEmbed()
                    .setDescription(`**<:certo1:1066123147071467630> | Limpeza concluida.**`)
                    .setTimestamp()
                    .setFooter({ text: `100 Menssagen Limpas por: ${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
                interaction.reply({ embeds: [embed], ephemeral: true })
            }
    }
}