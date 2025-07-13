/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const BuffInterface = require('../BuffInterface.js');
const WeaponInterface = require('../WeaponInterface.js');
const Logs = require('../util/logUtil.js');

module.exports = class Leech extends BuffInterface {
	init() {
		this.id = 11;
		this.name = 'Leech';
		this.debuff = true;
		this.emoji = '<:leech:1107927378816159754>';
		this.statDesc =
			'User who applied this debuff steals **?%** of incoming heals and **?%** of incoming replenishes.';
		this.qualityList = [
			[30, 60],
			[30, 60],
		];
	}

	healed(animal, healer, amount, tag) {
		if (tag.has('leech', animal)) return;
		let logs = new Logs();

		let stolen = amount[0] * (this.stats[0] / 100);
		amount[1] -= stolen;

		const tagCopy = tag.copy({
			me: this.from,
			allies: tag.allies,
			enemies: tag.enemies,
		});
		tagCopy.add('leech', animal);
		const heal = WeaponInterface.heal(this.from, stolen, this.from, tagCopy);

		logs.push(
			`[LECH] ${this.from.nickname} stole ${Math.round(stolen)} healing from ${animal.nickname}`,
			heal.logs
		);
		return logs;
	}

	replenished(animal, healer, amount, tag) {
		if (tag.has('leech', animal)) return;
		let logs = new Logs();

		let stolen = amount[0] * (this.stats[1] / 100);
		amount[1] -= stolen;

		const tagCopy = tag.copy({
			me: this.from,
			allies: tag.allies,
			enemies: tag.enemies,
		});
		tagCopy.add('leech', animal);
		const replenish = WeaponInterface.replenish(this.from, stolen, this.from, tagCopy);

		logs.push(
			`[LECH] ${this.from.nickname} stole ${Math.round(stolen)} replenishing from ${
				animal.nickname
			}`,
			replenish.logs
		);
		return logs;
	}
};
