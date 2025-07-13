/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const PassiveInterface = require('../PassiveInterface.js');
const WeaponInterface = require('../WeaponInterface.js');

/* +[5~20%] increase in wp*/

module.exports = class WeaponPoint extends PassiveInterface {
	init() {
		this.id = 4;
		this.name = 'Weapon Point';
		this.basicDesc = 'Increases your Weapon Points';
		this.emojis = [
			'<:cwp:535290421207629825>',
			'<:uwp:535290422151610369>',
			'<:rwp:535290422335897600>',
			'<:ewp:535290421593636874>',
			'<:mwp:535290421807415297>',
			'<:lwp:535290421887369216>',
			'<:fwp:535290421237252107>',
		];
		this.statDesc = `Increases your ${WeaponInterface.wpEmoji}WP by **?%**`;
		this.qualityList = [[10, 30]];
	}

	alterStats(stats) {
		let bonus = stats.wp[1] * (this.stats[0] / 100);
		stats.wp[3] += bonus;
	}
};
