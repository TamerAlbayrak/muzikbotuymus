const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("Maximus Boys", client.user.avatarURL)
    .setTitle("Maximus Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu Üye , Aktifliğini VB. Sunan Bottur!")
    .addField("Panel Üzerinden Yönet!", `Panel Link`,true)
    .setTimestamp()
    .setFooter("© Maximus Stat", client.user.avatarURL)
    message.channel.send(Embed)
    };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'panel', 
  description: '', 
  usage: 'panel' 
};
