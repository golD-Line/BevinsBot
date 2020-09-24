/* module.exports = async (client, fs) => {
  client.elevation = async (message) => { // set our permission levels
    permLevel = 1; // default permlvl of 1
    if (message.author.id === client.config.Dev) permLevel = 10; // if we're the dev, godmode
    //if (message.member.highestRole.comparePositionTo(message.guild.roles.find("name", `Insured`)) >= 0) permlvl = 2;
    return permLevel;
  };
}; */