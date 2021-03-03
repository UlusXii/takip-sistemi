/**
  @author Ulus Xii  <Discord: Ulus Xii#0421> <Mail: ulusdll@protonmail.com>
  @description It automatically follows the people you want to follow.
  @version v1.2
**/


const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
let takipedilen = "648424230081265664"; // Takip edeceğiniz kişinin IDsi.
let onlinetakipedilen = 648424230081265664; // Takip edeceğiniz kişinin IDsi.
let hesap = "648424230081265664"; // Sizin hesap ID'niz.
let fake_hesap = "793530148376018995"; // Fake Hesap ID'niz.
let depo = client.guilds.get('813929707020091392');


client.on('ready', () => {
  console.log(`Fake hesap :${client.user.tag} şuanda çevrimiçi.`);
});

 // Birisi takip ettiğiniz kişinin ismini bir yazı kanalına yazıp ardından sildiğinde mesajı depolar ve size iletir.
client.on("messageDelete", async deletedMessage => {
    if (deletedMessage.author.bot || deletedMessage.channel.type === "dm" || deletedMessage.author.id == takipedilen) return;
    if(deletedMessage.author.id === hesap) return;
    if(!deletedMessage.content.includes("hansel")) return;
      let bahsedilensunucu = deletedMessage.guild.name;
      let sunucuadi = bahsedilensunucu;
    client.guilds.get('SUNUCU IDNIZ').channels.get('KANAL IDNIZ').sendEmbed(new Discord.RichEmbed().setDescription("``"+`${sunucuadi}`+"``"+" "+"Sunucusunda "+" "+ "<@"+`${deletedMessage.author.id}`+"> "+" "+"adındaki kullanıcı Hansel'den şöyle bahsetti: "+ " ``"+`${deletedMessage}`+"``").setColor("#FFFF00").setTimestamp());
  });
   
  //Takip ettiğiniz kişinin ismini bir yazı kanalında paylaşıldığında size mesaj gönderir.
   client.on("message", async SentedMessage => {
    if (SentedMessage.author.bot || SentedMessage.channel.type === "dm") return;
    if (SentedMessage.author.id == takipedilen) return;
    if (SentedMessage.author.id == hesap) return;
    if(!SentedMessage.content.includes("takip etmek istediğiniz isim")) return; 
    if (SentedMessage.content.includes("takip etmek istediğiniz isim")) 
    {
      let bahsedilensunucu = SentedMessage.guild.name;
      let sunucuadi = bahsedilensunucu;
      let bahsedilenmesaj = SentedMessage.content;
      let bahsedenkisi = SentedMessage.author.tag;
      let takipsunucusu = client.guilds.get('812505935280472084');
      if(SentedMessage.guild.id === takipsunucusu) return;
      client.guilds.get('SUNUCU IDNIZ').channels.get('KANAL IDNIZ').sendEmbed(new Discord.RichEmbed().setDescription("``"+`${sunucuadi}`+"``"+" "+"Sunucusunda "+" <@"+ `${SentedMessage.author.id}`+"> "+"adındaki kullanıcı hansel şöyle bahsetti"+" ``"+`${bahsedilenmesaj}`+"``").setColor("RED").setTimestamp());
    }})
   
///Takip ettiğiniz kişi online/çevrimdışı/rahatsız etmeyin moduna geçtiğinde mesaj gönderir.
client.on("presenceUpdate", (oldMember, newMember) => {
  if(oldMember.id !== onlinetakipedilen) return;
  if(oldMember.presence.status != newMember.presence.status){  
       client.guilds.get('SUNUCU IDNIZ').channels.get('KANAL IDNIZ').send("Takip ettiğiniz kişi : **"+`${newMember.user.username}`+"**"+" "+"şuanda"+" "+`${newMember.presence.status}`);
}
});

  /// Takip ettiğiniz kişi bir ses kanalına girdiğinde mesaj gönderir.
 
  client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
    if(oldMember.id == takipedilen){
   
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
   
       var sunucuadi = newUserChannel.guild.name;
       
       client.guilds.get('SUNUCU IDNIZ').channels.get('KANAL IDNIZ').sendEmbed(new Discord.RichEmbed().setDescription("Takip ettiğin : "+ "<@" + takipedilen +"> "+"adlı kişi "+"``" +`${sunucuadi}`+"``" +"adlı sunucuda "+ "``"+`${newUserChannel.name}`+"``" + "adındaki ses odasına girdi.").setColor("GREEN").setTimestamp());
   
    } else if(newUserChannel === undefined){
        var sunucuadi = oldUserChannel.guild.name;
      client.guilds.get('SUNUCU IDNIZ').channels.get('KANAL IDNIZ').sendEmbed(new Discord.RichEmbed().setDescription("Takip ettiğin : "+ "<@" + takipedilen +"> "+"adlı kişi "+"``" +`${sunucuadi}`+"``" +"adlı sunucuda "+ "``"+`${oldUserChannel.name}`+"``" + "adındaki ses odasından çıkış yaptı..").setColor("RED").setTimestamp());
   
    }
  }});
