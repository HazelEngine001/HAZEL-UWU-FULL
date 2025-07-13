/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const PassiveInterface = require('../PassiveInterface.js');
const WeaponInterface = require('../WeaponInterface.js');

/* +[5~20%] increase in magic*/

module.exports = class Magic extends PassiveInterface {
	init() {
		this.id = 2;
		this.name = 'Magic';
		this.basicDesc = 'Increases your Magic';
		this.emojis = [
			'<:cmag:535290422340222987>',
			'<:umag:535290422969499668>',
			'<:rmag:535290422973562920>',
			'<:emag:535290422940139520>',
			'<:mmag:535290422923231247>',
			'<:lmag:535290422893871114>',
			'<:fmag:535290422852059138>',
		];
		this.statDesc = `Increases your ${WeaponInterface.magEmoji}MAG by **?%**`;
		this.qualityList = [[5, 20]];
	}

	alterStats(stats) {
		let bonus = stats.mag[0] * (this.stats[0] / 100);
		stats.mag[1] += bonus;
	}
};
