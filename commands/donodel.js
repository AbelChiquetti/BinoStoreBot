const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const config = new JsonDatabase({ databasePath:"./config.json" });

module.exports = {
    name: "donoadd",
    run: async(client, message, args) => {
      const user = args[0]
      if (message.author.id !== `798675844846977044`) return message.reply(`<:errado1:1066123250444284035> | Apenas o criador do bot pode usar isso!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if (config.get(`owner`) === `798675844846977044`) return message.reply(`<:errado1:1066123250444284035> | Não tem nenhum dono setado no momento!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      message.reply(`<:certo1:1066123147071467630> | Permissão de dono removida!`)
      config.set(`owner`, `798675844846977044`)
      if(user !== `${perms.get(`${user}_id`)}`) return
       else {
        perms.delete(`${user}_id`)
       }
    }
  }