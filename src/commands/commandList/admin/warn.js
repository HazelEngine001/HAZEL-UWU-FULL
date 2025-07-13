/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['warn'],

	owner: true,
	admin: true,
	manager: true,

	execute: async function (p) {
		if (p.args.length <= 1) {
			p.errorMsg(', Please include a warn reason', 3000);
			return;
		}

		if (!p.global.isUser('<@' + p.args[0] + '>')) {
			p.errorMsg(', Invalid user id', 3000);
			return;
		}

		let warn = p.args.slice(1).join(' ');
		let user = await p.sender.msgUser(
			p.args[0],
			'**⚠ |** You received a warning from a moderator: **' + warn + '**'
		);

		if (user && !user.dmError) {
			p.send(`📨 **|** Sent a warning to **${p.getUniqueName(user)}**`);
		} else {
			p.send('⚠ **|** Failed to send a warning for that user');
		}
	},
});
