/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['resetbot', 'restartbot'],

	owner: true,

	execute: function (p) {
		p.send('Restarting all shards');
		p.pubsub.publish('endProcess');
	},
});
