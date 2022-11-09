const { EmbedBuilder, CommandInteraction, ButtonStyle, Client, ButtonBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get the bot's invite link.",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
	new ButtonBuilder()
    .setLabel("Github")
    .setStyle(ButtonStyle.Link)
    .setURL("https://github.com/txj-xyz/roxanne-music-bot"),
    new ButtonBuilder()
    .setLabel("Support")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/GJanE63MGj")
			);

          const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Nadeshiko', iconURL: 'https://cdn.discordapp.com/avatars/1038961674784354314/8264eaeb55814b00eeeef3173090629d.webp'})
            .setThumbnail('https://cdn.discordapp.com/avatars/1038961674784354314/8264eaeb55814b00eeeef3173090629d.webp')
            .setColor(0x303236)
             .addFields([{ name: 'invite nadeshiko', value: `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`}])
             await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}
