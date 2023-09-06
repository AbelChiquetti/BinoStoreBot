const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });
const db = new JsonDatabase({ databasePath:"./databases/gifts.json" });

module.exports = {
    name: "estoque", 
    run: async(client, message, args) => {
      
      if(!args[0]) return message.reply(`<:errado1:1066123250444284035> | Coloque no mínimo um gift!`)
      if(args[1]) return message.reply(`<:errado1:1066123250444284035> | Você não pode colocar mais de um gift!`)
      if(args[0] !== `${db.get(`${args[0]}.idgift`)}`) return message.reply(`<:errado1:1066123250444284035> | Gift inválido!`)
      if(`${db.get(`${args[0]}.status`)}` == `Resgatado`) return message.reply(`<:errado1:1066123250444284035> | Gift já resgatado!`)
      var texto = ""
      var quant = 1
      var estoque = `${db.get(`${args[0]}.estoque`)}`.split(',');
            
      for(let i in estoque) {
        texto = `${texto}${quant}° | ${estoque[i]}\n`
        quant++
      }
      
      db.set(`${args[0]}.status`, `Resgatado`)
      db.delete(`${args[0]}.estoque`)
      message.reply(`<:certo1:1066123147071467630> | Resgatado com sucesso!`)
      const embed = new Discord.MessageEmbed()
          .setTitle(`${config.get(`title`)} | Gift Resgtado`)
          .addField(`<:caixa:1071265643812356179> Presentes:`, `\`\`\`${texto}\`\`\``)
          .addField(`<:ticketlog:1066123441809399880> Código:`, `${args[0]}`)
          .setColor(config.get(`color`))
      message.author.send({embeds: [embed]})
    }
  }      