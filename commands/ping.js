exports.run = (client, message, params) => {
    // // Empty message handler
message.channel.send("Pong!")
.catch(e => client.log.error(e));
return

    // if (message.channel.type != `dm`) message.delete();
    // message.channel.send(params.join(` `))
    //   .catch(e => client.log.error(e));
  };
  
  exports.conf = {
    name: `ping`,
    aliases: [`p`],
    permLevel: 5,
    enabled: true,
    guildOnly: false
  };