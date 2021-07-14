const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Maximus Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiğini Gösteren Bir Bot!")
    .addField(
      "!botbilgi | **Bot Hakkında Bilgi Verir!**",
      "!davet | **Bot Davet Linklerini Sunar!**",
      "!kurulum | **Sunucu Panel Aktifleştirir!**",
      "!kapat | **Sunucu Panel Devre Dışı Bırakır!**",
      "!panel | **Website Panelini Sunar!**",
    )
    .setTimestamp()
    .setFooter("© Server Stat", client.user.avatarURL);
  message.channel.send(Embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: "yardım"
};
