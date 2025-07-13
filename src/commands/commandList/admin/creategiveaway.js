/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['cg', 'creategiveaway'],

	owner: true,
	admin: true,
	manager: true,

	execute: async function () {
		await this.giveaway.createGiveaway.bind(this)(this.msg.channel.id, this.msg.author, false);
	},
});
