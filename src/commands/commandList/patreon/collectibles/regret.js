/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Regret extends Collectible {
	constructor() {
		super();

		this.key = 'regret';
		this.emoji = '<a:regret:1288001896346419230>';
		this.owners = ['486604819545587723'];
		this.pluralName = 'regret';
		this.singleName = 'regrets';
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = '\n\n\n"same fears, same dreams"';
		this.displayMsg = '?emoji? **| ?user?**, you have collected ?count? ?pluralName? ?emoji?';
		this.brokeMsg = ', you do not have any regrets! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, you have acquired one regret';

		this.init();
	}
}

module.exports = new Regret();
