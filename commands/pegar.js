const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const db3 = new JsonDatabase({ databasePath:"./databases/myJsonIDs.json" });
const config = new JsonDatabase({ databasePath:"./config.json" });

module.exports = {
    name: "info",
    run: async(client, message, args) => {
      const embederro2 = new Discord.MessageEmbed()
      if (message.author.id !== config.get(`owner`)) return message.reply(`<:errado1:1066123250444284035> | Apenas o dono do bot pode usar isso!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if (!args[0]) return message.reply(`<:errado1:1066123250444284035> | Você não selecionou nenhum ID de compra!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if(args[0] !== `${db3.get(`${args[0]}.id`)}`) return message.reply(`<:errado1:1066123250444284035> | Esse ID de compra não é existente!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        
      const id = args[0]
      const embed = new Discord.MessageEmbed()
        .setTitle(`${config.get(`title`)} | Compra Aprovada`)
        .addField(`<a:estrela:1071265083650478101> | ID da compra:`, `${db3.get(`${args[0]}.id`)}`)
        .addField(`<a:sino:983149288156708895> | Status:`, `${db3.get(`${args[0]}.status`)}`)
        .addField(`<:identidade:1066123218244608042> | Comprador(a):`, `<@${db3.get(`${args[0]}.userid`)}>`)
        .addField(`<:identidade:1066123218244608042> | ID Comprador(a):`, `${db3.get(`${args[0]}.userid`)}`)
        .addField(`📅 | Data da compra:`, `${db3.get(`${args[0]}.dataid`)}`)
        .addField(`<:diamante:1066439127916089475> | Produto:`, `${db3.get(`${args[0]}.nomeid`)}`)
        .addField(`<:caixa:1071265643812356179> | Quantidade:`, `${db3.get(`${args[0]}.qtdid`)}`)
        .addField(`<:valor:1071265640918298634> | Preço:`, `${db3.get(`${args[0]}.precoid`)}`)
        .addField(`<a:presente_gift:1066353855882870924> | Produto entregue:`, `\`\`\`${db3.get(`${args[0]}.entrid`)}\`\`\``)
        .setColor(config.get(`color`))
      message.reply({embeds: [embed], content: "<:certo1:1066123147071467630> | Encontrado!"})
    }
}