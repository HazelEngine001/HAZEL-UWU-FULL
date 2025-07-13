/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

const profileUtil = require('../social/util/profileUtil.js');

module.exports = new CommandInterface({
	alias: ['adminprofile'],

	owner: true,
	admin: true,
	manager: true,
	helper: true,

	execute: async function (p) {
		if (p.global.isUser(p.args[0]) || p.global.isInt(p.args[0])) {
			let user = p.args[0].match(/[0-9]+/)[0];
			user = await p.fetch.getUser(user);
			if (!user) {
				p.errorMsg(", I couldn't find that user!", 3000);
			} else {
				await profileUtil.displayProfile(p, user);
			}
		} else {
			p.errorMsg(', invalid arguments! Please tag a user');
		}
	},
});
