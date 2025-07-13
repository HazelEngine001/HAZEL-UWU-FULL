/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const BuffInterface = require('../BuffInterface.js');
const Logs = require('../util/logUtil.js');

module.exports = class Freeze extends BuffInterface {
	init() {
		this.id = 5;
		this.name = 'Freeze';
		this.debuff = true;
		this.emoji = '<:freeze:618621661486514176>';
		this.statDesc = 'Freeze an enemy. They can not attack next turn.';
		this.qualityList = [];
	}

	canAttack(me, ally, enemy, action, result) {
		// Freeze only works next turn
		if (this.justCreated) return;

		result.result = false;
		super.postTurn(me, ally, enemy, action);

		let logs = new Logs();
		logs.push(`[FREEZE] ${me.nickname} is frozen and can't attack`);
		return logs;
	}

	// Skip duration decrementation, because we will do that in canAttack
	postTurn(_animal, _ally, _enemy, _action) {
		if (this.justCreated) this.justCreated = false;
	}
};
