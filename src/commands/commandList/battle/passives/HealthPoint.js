/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const PassiveInterface = require('../PassiveInterface.js');
const WeaponInterface = require('../WeaponInterface.js');

/* +[5~20%] increase in hp*/

module.exports = class HealthPoint extends PassiveInterface {
	init() {
		this.id = 3;
		this.name = 'Health Point';
		this.basicDesc = 'Increases your Health Points';
		this.emojis = [
			'<:chp:535290421467807755>',
			'<:uhp:535290422721904640>',
			'<:rhp:535290422709321748>',
			'<:ehp:535290421740568577>',
			'<:mhp:535290421769928716>',
			'<:lhp:535290422147153930>',
			'<:fhp:535290422306799616>',
		];
		this.statDesc = `Increases your ${WeaponInterface.hpEmoji}HP by **?%**`;
		this.qualityList = [[5, 20]];
	}

	alterStats(stats) {
		let bonus = stats.hp[1] * (this.stats[0] / 100);
		stats.hp[3] += bonus;
	}
};
