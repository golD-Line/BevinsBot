exports.run = (client, message, params) => {

    if (message.channel.type == `dm`) return;   
    message.channel.send(`Add me to your Server! ${client.config.inviteLink}`)
    .catch(e => client.log.error(e));
  };
  
  exports.conf = {
    name: `join`,
    aliases: [`invite`],
    permLevel: 0,
    enabled: true,
    guildOnly: false
  };