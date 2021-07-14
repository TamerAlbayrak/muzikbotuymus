const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  try {
//let shardi = bot.shard.id + 1;

    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
      .setColor("MaximusBoys")
      .addField(`Versiyon`, `0.1`, true)
      .addField(`Aktiflik Süresi`, duration, true)
      .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
      .addField(
        `Kullanıcılar`,
        bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`Gecikme`, bot.ping + "ms", true)
      .addField(
        `Ram Kullanımı`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
        true
      )
   
      .addField(`Destek Sunucusu`, `[Tıkla!](Destek Sunucusu)`, true)
      .addField(`Botu Ekleyin`, `[Tıkla!](Davet Linki)`, true)
      .addField(`Bota Oy Verin`, `YAKINDA`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
  } catch (err) {
    const ayarlar = require("./bot.js");
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Destek Sunucusu: [Tıkla!](Destek Sunucunuz!)`
      )
      .setColor("RED")
      .setTimestamp();
    message.channel.send(embed);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "",
  usage: "bot-bilgi"
};
