const Discord = require("discord.js")

module.exports = {
    name: "botinfo", // Coloque o nome do comando do arquivo
    aliases: ["infobot"], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        let servidor = client.guilds.cache.size;
        let usuarios = client.users.cache.size;
        let canais = client.channels.cache.size;
        let ping = client.ws.ping;
        let dono_id = "798675844846977044"; // Seu ID
        let dono = client.users.cache.get(dono_id);
        let prefixo = ".";
        let versao = "1.6";

        let embed = new Discord.MessageEmbed()
            .setColor("#9400D3")
            .setTimestamp(new Date)
            .setDescription(`<:NG_Cat_Like:1066354379118088244> | Olá, tudo bem? me chamo, **[${client.user.username}](https://discord.gg/abelstore)** e fui desenvolvido para facilitar a vida dos meus usuários.


\ **・<a:developer:983149227020533870> | Criador: ** [Juliano#1650](https://discord.gg/abelstore)
\ **・<a:pc:999117232317661254> | Linguagem: ** [node.js](https://nodejs.org/en/)
\ **・<a:sino:983149288156708895> | Versão: ** ${versao}

\ **・🗡 | Ping:** ${ping}`);



        message.reply({ embeds: [embed] })



    }
}