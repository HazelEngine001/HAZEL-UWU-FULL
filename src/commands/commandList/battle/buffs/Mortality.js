/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const BuffInterface = require('../BuffInterface.js');
const Logs = require('../util/logUtil.js');

module.exports = class Mortality extends BuffInterface {
	init() {
		this.id = 9;
		this.name = 'Mortality';
		this.debuff = true;
		this.emoji = '<:mortality:619458869730476042>';
		this.statDesc = 'Decreases all healing for this animal by **?%**';
		this.qualityList = [[45, 75]];
	}

	// Override
	bind(animal, duration, tags) {
		for (let i in animal.buffs) {
			if (animal.buffs[i].id == this.id) {
				animal.buffs[i].duration += duration;
				return;
			}
		}

		super.bind(animal, duration, tags);
	}

	healed(animal, healer, amount, _tag) {
		let logs = new Logs();

		let dec = amount[0] * (this.stats[0] / 100);
		amount[1] -= dec;

		logs.push(`[MORT] Healing was decreased by ${Math.round(dec)}`);
		return logs;
	}
};
