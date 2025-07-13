/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['banguildmembers'],

	owner: true,
	admin: true,

	execute: async function () {
		const guildId = this.args[0];
		if (!this.global.isInt(guildId)) {
			return this.errorMsg(', invalid guild id!');
		}

		let guild;
		try {
			guild = await this.fetch.getGuild(guildId, false);
			if (!guild) {
				return this.errorMsg(', invalid guild id!');
			}
		} catch (err) {
			return this.errorMsg(', invalid guild id!');
		}

		this.send(`Attempting to ban all guild members in ${guild.name}...`);
		this.pubsub.publish('banGuildMembers', {
			guildId,
			replyChannel: this.msg.channel.id,
		});
	},
});
