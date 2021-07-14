const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("MaximusBoys", client.user.avatarURL)
    .setTitle("MaximusBoys")
    .setColor("YELLOW")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("Davet Linkim", `Davet Linki!`,true)
    .setTimestamp()
    .setFooter("© Maximus Boys", client.user.avatarURL)
    message.channel.send(Embed)
    };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'davet', 
  description: '', 
  usage: 'davet' 
};
