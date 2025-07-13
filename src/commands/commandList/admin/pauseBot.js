/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['pausebot'],

	owner: true,
	manager: true,

	execute: function () {
		let sec = this.args[0];
		if (!this.global.isInt(sec)) {
			this.errorMsg(', invalid time!');
			return;
		}
		sec = parseInt(sec);
		if (sec > 300) {
			sec = 300;
		} else if (sec <= 0) {
			sec = 1;
		}
		this.send(`Pausing bot for ${sec}s`);
		this.pubsub.publish('pauseBot', sec);
	},
});
