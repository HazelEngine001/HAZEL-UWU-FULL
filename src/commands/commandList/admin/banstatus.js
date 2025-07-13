/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['banstatus'],

	owner: true,
	admin: true,
	manager: true,
	helper: true,

	execute: async function (p) {
		let userid = p.args[0];
		if (!p.global.isInt(userid)) {
			p.errorMsg(', Invalid user id!', 3000);
			return;
		}
		let user = await p.fetch.getUser(userid);
		let username = user ? user.username : userid;

		let info = await p.macro.fetchBanInfo(userid, username);

		p.send(info);
	},
});
