/**
  @author Ulus Xii  <Discord: Ulus Xii#0421> <Mail: ulusdll@protonmail.com>
  @description It automatically follows the people you want to follow.
  @version v1.3
  @discord.js v11.4.2
**/


const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const prefix = "."
let takipedilen = ""; // Takip edeceğiniz kişinin IDsi.
let hesap = ""; // Sizin hesap ID'niz.
const online_takip = new Discord.WebhookClient('Webhook ID','Webhook Token');
const yazilarhook = new Discord.WebhookClient('Webhook ID','Webhook Token');
const etiket_takip = new Discord.WebhookClient('Webhook ID','Webhook Token');
const ses_giris = new Discord.WebhookClient('Webhook ID','Webhook Token');
const ses_cikis = new Discord.WebhookClient('Webhook ID','Webhook Token');
const avatar_takip = new Discord.WebhookClient('Webhook ID','Webhook Token');
const isim_takip = new Discord.WebhookClient('Webhook ID','Webhook Token');
const hashtag_takip = new Discord.WebhookClient('Webhook ID','Webhook Token')
client.on('ready', () => {
  console.log(`Fake hesap :${client.user.tag} şuanda çevrimiçi.`);
});
 
// Silinen mesajda eğer takip ettiğiniz kişinin ismi bulunuyorsa.
client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm" || deletedMessage.author.id == takipedilen) return;
  if(deletedMessage.author.id === hesap) return;
  if(!deletedMessage.content.includes("TAKIP EDİLEN İSİM")) return;
    let bahsedilensunucu = deletedMessage.guild.name;
    let sunucuadi = bahsedilensunucu;
  client.guilds.get('Sunucu ID').channels.get('KANAL ID').sendEmbed(new Discord.RichEmbed().setDescription("``"+`${sunucuadi}`+"``"+" "+"Sunucusunda "+" "+ "<@"+`${deletedMessage.author.id}`+"> "+" "+"adındaki kullanıcı Nur'dan şöyle bahsetti: "+ " ``"+`${deletedMessage}`+"``").setColor("#FFFF00").setTimestamp());
});
 
  //İsim Takibi
  client.on("message", async SentedMessage => {
    if (SentedMessage.author.bot || SentedMessage.channel.type === "dm") return;
    if (SentedMessage.author.id == takipedilen) return;
    if (SentedMessage.author.id == hesap) return;
    if(!SentedMessage.content.includes("TAKIP EDİLEN İSİM")) return; 
    if (SentedMessage.content.includes("TAKIP EDİLEN İSİM"))
 if (SentedMessage.content.includes("TAKIP EDİLEN İSİM"))	
    {
      let bahsedilensunucu = SentedMessage.guild.name;
      let sunucuadi = bahsedilensunucu;
      let bahsedilenmesaj = SentedMessage.content;
      let bahsedenkisi = SentedMessage.author.tag;
      let takipsunucusu = client.guilds.get('Sunucu ID');
      if(SentedMessage.guild.id === takipsunucusu) return;
      client.guilds.get('Sunucu ID').channels.get('KANAL ID').sendEmbed(new Discord.RichEmbed().setDescription("``"+`${sunucuadi}`+"``"+" "+"Sunucusunda "+" <@"+ `${SentedMessage.author.id}`+"> "+"adındaki kullanıcı Nur'dan şöyle bahsetti"+" ``"+`${bahsedilenmesaj}`+"``").setColor("RED").setTimestamp());
    }})
//etiket takibi
client.on('message', msg => {
    let member = msg.author
    if(!msg.mentions.members.size) return;
    let target = msg.mentions.members.first()
	if (msg.author.bot) return;
    let isim = msg.member.user.tag
    let id = msg.author.id
    let sunucuadi = msg.guild.name
    let kanaladi = msg.channel.name
    const roles = msg.member.roles
    .map(r => r.name).join(", ")
    if(msg.author.bot) return;
    if(!target) return;
	if(target.id != takipedilen) return;
    if(!target.id == takipedilen) return;
    let etiket_embed = new Discord.RichEmbed()
    .setAuthor(isim)
    .addField(`Yeni bir etiket var ❗`, `Etiket tarihi : ${new Date()}`)
    .addField(`Etiketleyen kişinin rolleri`, roles)
    .setDescription(`Mesaj içeriği : \n ** ${msg} **`)
    .setThumbnail(member.displayAvatarURL)
    .setColor('RANDOM')
    .addField(`${isim} adlı kişi hakkında bilinenler`, `ID : ${id} \n İsim : ${isim} \n  H.Tarihi : ${msg.member.user.createdAt}`)
    .setFooter(`${sunucuadi.toUpperCase()} sunucusunda ${kanaladi.toUpperCase()} adlı kanalda.`, member.displayAvatarURL)
    .setTimestamp()
    etiket_takip.send({
      username: `${isim}`,
      avatarURL: `${member.displayAvatarURL}`,
      embeds: [etiket_embed],});
})

  ///Online Takipi 
  client.on("presenceUpdate", (oldMember, newMember) => {
    if(oldMember.id !== takipedilen) return;
   
    if(newMember.guild.id != "ANA SUNUCU ID") return;
    
    if(oldMember.presence.status != newMember.presence.status){
        const embed = new Discord.RichEmbed()
        .setDescription("Takip ettiğiniz kişi : **"+`${newMember.user.tag}`+"**"+" "+"şuanda"+" "+`${durum.toUpperCase()}`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL}`);
      
      online_takip.send({
        username: `${client.user.tag}`,
        avatarURL: `${client.user.displayAvatarURL}`,
        embeds: [embed],});
  }

  });
  /// Ses takibi
 
  client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
    if(oldMember.id == takipedilen){
   
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
   
       var sunucuadi = newUserChannel.guild.name;
       
       let ses_girdi = 
       new Discord.RichEmbed().
       setDescription("Takip ettiğin : "+ "<@" + takipedilen +"> "+"adlı kişi "+"``" +`${sunucuadi}`+"``" +"adlı sunucuda "+ "``"+`${newUserChannel.name}`+"``" + "adındaki ses odasına girdi.")
       .setColor("GREEN")
       .setTimestamp()
       ses_giris.send({
        username: `${client.user.tag}`,
        avatarURL: `${client.user.displayAvatarURL}`,
        embeds: [ses_girdi],});
   
    } else if(newUserChannel === undefined){
        var sunucuadi = oldUserChannel.guild.name;
     let ses_cikti = new Discord.RichEmbed()
     .setDescription("Takip ettiğin : "+ "<@" + takipedilen +"> "+"adlı kişi "+"``" +`${sunucuadi}`+"``" +"adlı sunucuda "+ "``"+`${oldUserChannel.name}`+"``" + "adındaki ses odasından çıkış yaptı..")
     .setColor("RED")
     .setTimestamp()
     ses_cikis.send({
      username: `${client.user.tag}`,
      avatarURL: `${client.user.displayAvatarURL}`,
      embeds: [ses_cikti],});
    }
  }});
// Takip ettiğiniz kişi bir sunucuda bulunan bir yazı kanalına mesaj gönderdiğinde
client.on('message', msg => {
  if(msg.author.id != takipedilen) return;
  let kisi = msg.author
  let embed = new Discord.RichEmbed()
  .setFooter(`${msg.guild.name.toUpperCase()} adlı sunucuda ${msg.channel.name.toUpperCase()} adlı yazı kanalında`,`${msg.guild.iconURL}`)
  .setTimestamp()
  .addField(`${msg.member.user.tag} adlı kişiden yeni bir mesaj var!`, `${msg}`,true)
  
  .setColor('RANDOM')
  yazilarhook.send({
    username: `${client.user.tag}`,
    avatarURL: `${client.user.displayAvatarURL}`,
    embeds: [embed],});

});
 // Takip ettiğiniz kişi Nick,Profil fotoğrafı ve hashtagini değiştirdiğinde.
client.on('userUpdate', async (oldMember, newMember) => {
  if(oldMember.id != takipedilen) return;
  if(oldMember.username != newMember.username) {
    let isim_embed = 
      new Discord.RichEmbed()
      .setDescription(` Takip ettiğiniz kişi isim değiştirdi.\n
      Eski isim : ${oldMember.username}
      Yeni isim :  ${newMember.username}
  `)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`${oldMember.username}`, newMember.displayAvatarURL)
      isim_takip.send({
        username: `${client.user.tag}`,
        avatarURL: `${client.user.displayAvatarURL}`,
        embeds: [isim_embed],});
  }
  if(oldMember.username == newMember.username && oldMember.discriminator == newMember.discriminator)
  {
    let avatar_embed =
      new Discord.RichEmbed()
      .setDescription(` Takip ettiğiniz kişi profil fotoğrafını değiştirdi.`)
      .setThumbnail(newMember.displayAvatarURL)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`${newMember.username}`, newMember.displayAvatarURL)
      avatar_takip.send({
        username: `${client.user.tag}`,
        avatarURL: `${client.user.displayAvatarURL}`,
        embeds: [avatar_embed],});
  }

if(oldMember.username == newMember.username && oldMember.discriminator != newMember.discriminator)
  {
    let hashtag_embed = 
      new Discord.RichEmbed()
      .setDescription(` Takip ettiğiniz kişi hashtag değiştirdi.`)
      .setThumbnail(newMember.displayAvatarURL)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`${newMember.username}`, newMember.displayAvatarURL)
      hashtag_takip.send({
        username: `${client.user.tag}`,
        avatarURL: `${client.user.displayAvatarURL}`,
        embeds: [hashtag_embed],});  
  }
})

client.login(ayarlar.token);  
