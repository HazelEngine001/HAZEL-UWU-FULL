/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['refreshanimals', 'ra'],

	owner: true,

	execute: function (p) {
		let animalName;
		if (p.args[0]) {
			animalName = p.args[0];
		}
		p.send('Refreshing all animals');
		p.pubsub.publish('refreshAnimals', { animalName });
	},
});
