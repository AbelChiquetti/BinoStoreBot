const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });

module.exports = {
    name: "ajuda",
    run: async(client, message, args) => {        
      const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('retornar')
            .setEmoji('◀')
            .setDisabled(true)
            .setStyle('PRIMARY'),
        )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('proxima')
            .setEmoji('▶')
            .setDisabled(false)
            .setStyle('PRIMARY'),
        );
        
        const embed = await message.reply({ embeds: [new Discord.MessageEmbed()
          .setTitle(`${config.get(`title`)} | Meus Comandos`)
          .setDescription(`
<:settings:1066355265596837888> | ${config.get(`prefix`)}ajuda - Veja meus comandos
<:settings:1066355265596837888> | ${config.get(`prefix`)}anuncio - Envie um anuncio Embed
<:settings:1066355265596837888> | ${config.get(`prefix`)}botinfo - Veja minhas informações
<:settings:1066355265596837888> | ${config.get(`prefix`)}info - Veja informações de uma compra
<:settings:1066355265596837888> | ${config.get(`prefix`)}perfil - Veja seu perfil
<:settings:1066355265596837888> | ${config.get(`prefix`)}status - Veja os status de vendas
<:settings:1066355265596837888> | ${config.get(`prefix`)}rendimentos - Veja seus rendimentos
<:settings:1066355265596837888> | ${config.get(`prefix`)}pegar - Veja um produto entregue
<:settings:1066355265596837888> | ${config.get(`prefix`)}pagar - Sete um id de uma compra como pago
<:settings:1066355265596837888> | ${config.get(`prefix`)}criargift - Crie um código Gift
<:settings:1066355265596837888> | ${config.get(`prefix`)}resgatar - Resgate um código Gift
<:settings:1066355265596837888> | ${config.get(`prefix`)}criarcupom - Crie um cupom de desconto
<:settings:1066355265596837888> | ${config.get(`prefix`)}configcupom - Gerencie um cupom de desconto
<:settings:1066355265596837888> | ${config.get(`prefix`)}limpar - Apague as mensagens do chat
<:settings:1066355265596837888> | ${config.get(`prefix`)}criados - Veja todos os produtos, cupons e gifts criados
`)
          .setTimestamp()
          .setFooter(`Pagina 1/2`)
          .setThumbnail(client.user.displayAvatarURL())
          .setColor(config.get(`color`))], components: [row]})
        const interação = embed.createMessageComponentCollector({ componentType: "BUTTON", })
         interação.on("collect", async (interaction) => {
          if (message.author.id != interaction.user.id) { return; }
            if (interaction.customId === 'retornar') {
              interaction.deferUpdate();
              row.components[0].setDisabled(true)
              row.components[1].setDisabled(false)
              const embednew = new Discord.MessageEmbed()
                .setTitle(`${config.get(`title`)} | Meus Comandos`)
                .setDescription(`
<:settings:1066355265596837888> | ${config.get(`prefix`)}ajuda - Veja meus comandos
<:settings:1066355265596837888> | ${config.get(`prefix`)}anuncio - Envie um anuncio Embed
<:settings:1066355265596837888> | ${config.get(`prefix`)}botinfo - Veja minhas info
<:settings:1066355265596837888> | ${config.get(`prefix`)}info - Veja info de uma compra
<:settings:1066355265596837888> | ${config.get(`prefix`)}perfil - Veja seu perfil
<:settings:1066355265596837888> | ${config.get(`prefix`)}status - Veja os status de vendas
<:settings:1066355265596837888> | ${config.get(`prefix`)}rendimentos - Veja seus rendimentos
<:settings:1066355265596837888> | ${config.get(`prefix`)}pegar - Veja um produto entregue
<:settings:1066355265596837888> | ${config.get(`prefix`)}pagar - Altere um id para pago
<:settings:1066355265596837888> | ${config.get(`prefix`)}criargift - Crie um Gift
<:settings:1066355265596837888> | ${config.get(`prefix`)}resgatar - Resgatar um código Gift
<:settings:1066355265596837888> | ${config.get(`prefix`)}criarcupom - Crie um cupom
<:settings:1066355265596837888> | ${config.get(`prefix`)}configcupom - Gerencie um cupom
<:settings:1066355265596837888> | ${config.get(`prefix`)}limpar - Apague as mensagens do chat
<:settings:1066355265596837888> | ${config.get(`prefix`)}criados - Veja todos os produtos, cupons e gifts criados
`)
                .setTimestamp()
                .setFooter(`Pagina 1/2`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor(config.get(`color`))
              embed.edit({ embeds: [embednew], components: [row] })
            }
             
            if (interaction.customId === 'proxima') {
              interaction.deferUpdate();
              row.components[0].setDisabled(false)
              row.components[1].setDisabled(true)
              const embednew = new Discord.MessageEmbed()
                .setTitle(`${config.get(`title`)} | Meus Comandos`)
                .setDescription(`
<:settings:1066355265596837888> | ${config.get(`prefix`)}configbot - Configure o bot **(obrigatório)**
<:settings:1066355265596837888> | ${config.get(`prefix`)}configcanais - Configura os canais **(obrigatório)**
<:settings:1066355265596837888> | ${config.get(`prefix`)}configstatus - Configura os status **(obrigatório)**
<:settings:1066355265596837888> | ${config.get(`prefix`)}criar - Crie um produto
<:settings:1066355265596837888> | ${config.get(`prefix`)}setar - Sete um produto
<:settings:1066355265596837888> | ${config.get(`prefix`)}config - Gerencie um produto
<:settings:1066355265596837888> | ${config.get(`prefix`)}estoque - Gerencie um estoque
<:settings:1066355265596837888> | ${config.get(`prefix`)}rank - Veja o ranking de clientes
<:settings:1066355265596837888> | ${config.get(`prefix`)}permadd - Adicione um administrador
<:settings:1066355265596837888> | ${config.get(`prefix`)}donoadd - Adicione um dono
<:settings:1066355265596837888> | ${config.get(`prefix`)}permdel - Remova um administrador
<:settings:1066355265596837888> | ${config.get(`prefix`)}donodel - Remova um dono
`)
                .setTimestamp()
                .setFooter(`Pagina 2/2`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor(config.get(`color`))
              embed.edit({ embeds: [embednew], components: [row] })
              }
            })
          }
        }