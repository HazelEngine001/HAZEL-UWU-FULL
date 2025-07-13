/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['removeoptout', 'roo'],

	owner: true,
	admin: true,
	manager: true,

	execute: async function (p) {
		if (!p.global.isUser('<@' + p.args[0] + '>')) {
			p.errorMsg(', Invalid user id', 3000);
			return;
		}

		const id = p.args[0];
		await p.redis.hdel('optOut', id);
		await p.pubsub.publish('optOut', { id, remove: true });
		await p.replyMsg(p.config.emoji.gear, `, removed user from opt out: ${id}`);
	},
});
