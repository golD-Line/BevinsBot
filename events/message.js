module.exports = async (client, message) => {

  /**───────────────────────────────────────────────────────────────── @TEST_USER ───────*/
  client.elevation = async (message) => { // set our permission levels
    permlvl = 1; // default permlvl of 1
    if (message.author.id === client.config.Dev) permlvl = 10; // if we're the dev, godmode
    if (message.author.id === '700515714703818772') permlvl = 9; // if we're the bev, jesusmode
    return permlvl;
  };

  /**───────────────────────────────────────────────────────────────── @TEST_PREFIX ───────*/
  let prefix = false;
  for (const thisPrefix of client.config.prefix) { // in json "prefix" : ["!", "-"]
    if (message.content.includes(thisPrefix)) prefix = thisPrefix;
  }
  if (!prefix || message.author.bot) return; // if no prefix or is bot return

  /**───────────────────────────────────────────────────────────────── @GET_ARGUMENTS ───────*/
  var triggerLocation = message.content.indexOf(prefix);
  
  const args = message.content.substring(triggerLocation+1, message.content.length).split(/ +/g);
  let command = args.shift().toLowerCase(),
    perms = client.elevation(message),
    cmd;
  if (message.channel.type == `dm`) console.log(`DM of: ${message.content}`); // Catches DM content.
console.log(await perms)
  /**───────────────────────────────────────────────────────────────── @TEST_COMMAND ───────*/
  if (client.commands.has(command)) {
    cmd = client.commands.get(command)
  } else if (client.aliases.has(command)) { // or an alias
    cmd = client.commands.get(client.aliases.get(command))
  };
  
  /**───────────────────────────────────────────────────────────────── @SECURE_RUN ───────*/
  if (cmd) {
    if (await perms < cmd.conf.permLevel) return console.log(`Perm level is too low`);
    if (!cmd.conf.enabled) return console.log(`Command Disabled`);
    cmd.run(client, message, args, perms);
  }

  /**───────────────────────────────────────────────────────────────── @COMMAND_HELP ─────*/
  if (command === `h` || command === `help` || command === `info` || command === `commands`) {
    message.channel.send({
      embed: {
        title: `Commands available:`,
        description: `
                      **join or invite** - Get the OAuth2 link to add the bot to one of your servers.
                      **say** (something) - Repeats after you.
                      These commands also work via DM.
                      `
      }
    }).then(async msg => {
      if (msg.channel.type !== `dm`) msg.delete({ timeout: 50000, reason: 'It had to be done.' });
    }).catch(e => console.error(e));
  };
};