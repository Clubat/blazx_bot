const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", (member) => {
    const defaultRole = "551764112900751401"
    const memberCount = "630502678962634793"
    let user = client.users.find(x=> x.id === member.id).username
    let tag = client.users.find(x=> x.id === member.id).discriminator
    let imageurl= client.users.find(x=> x.id === member.id).avatarURL
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#00FF00')
    .setAuthor('Nouvelle arrivée sur le discord !')
    .setThumbnail(imageurl)
    .addField(user +"#"+ tag, "est arrivé sur le discord")
    .setTimestamp()
    .setFooter('© Clubat');
    client.channels.find("id","551762440182824983").send(exampleEmbed)
    member.addRole(defaultRole);
    member.guild.channels.find("id", memberCount).setName("Membres : " + client.users.size)
  });


  client.on("guildMemberRemove", (member) => {
    const memberCount = "630502678962634793"
    member.guild.channels.find("id", memberCount).setName("Membres : " + client.users.size)
  });

client.on('message', message => {
    if (message.content === '.salut') {
      message.channel.send('Salut les négros !')
    }
  })

client.login(process.env.TOKEN);