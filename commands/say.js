exports.run = (client, message, params) => {
  // Empty message handler
  if (params.length==0) {
    message.channel.send({
      embed: {
        description: `usage: ${client.config.prefix}say [words]`
      }
    })
      .catch(e => console.error(e));
    return
  }
  if (message.channel.type != `dm`) message.delete();
  console.log(params.length);
  message.channel.send(params.join(` `))
    .catch(e => console.error(e));
};

exports.conf = {
  name: `say`,
  aliases: [`say`],
  permLevel: 0,
  enabled: true,
  guildOnly: false
};