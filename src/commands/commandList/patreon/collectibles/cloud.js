/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Cloud extends Collectible {
	constructor() {
		super();

		this.key = 'cloud';
		this.emoji = '<:cloud:1056432510101364777>';
		this.owners = ['692146302284202134', '460987842961866762'];
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description =
			"Soft mist of cotton gentle and sweet,  combine me with thunder and I'll be your worst nightmare.";
		this.displayMsg =
			'?emoji? **| ?user?**, your sky has **?count?** fluffy clouds ?emoji?' +
			'\n?mergeEmoji? **|** You’ve had **?mergeCount?** storms come your way! <:thunder:1056432512953491526>';
		this.brokeMsg = ', you do not have any clouds to give! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, have this soft fluffy ?emoji? cloud';

		this.failChance = 0.2;
		this.failMsg =
			'<:thunder:1056432512953491526> **|** Oh no **?receiver?**! You have been struck by <:thunder:1056432512953491526> thunder!';

		this.hasManualMerge = true;
		this.manualMergeData = 'cloud_storm';
		this.manualMergeCommands = [];
		this.mergeNeeded = 1;
		this.mergeEmoji = '<:storm:1056432511246405713>';
		this.mergeMsg = '';

		this.init();
	}

	async getFailMsg(p, user) {
		let count = (await p.redis.hget(`data_${user.id}`, this.data)) || 0;
		if (count <= 0) {
			return super.getFailMsg(p, user);
		}
		await p.redis.hincrby(`data_${user.id}`, this.data, -1);
		await p.redis.hincrby(`data_${user.id}`, this.manualMergeData, 1);
		const msg =
			this.failMsg +
			'\n<:storm:1056432511246405713> **|** You now have **1** storm coming your way!';
		return super.getFailMsg(p, user, msg);
	}
}

module.exports = new Cloud();
