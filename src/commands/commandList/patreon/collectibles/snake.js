/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Snake extends Collectible {
	constructor() {
		super();

		this.key = 'snake';
		this.emoji = '<:_snake:889369004660109363>';
		this.owners = ['380822909813391360', '384202884553768961'];
		this.fullControl = true;
		this.ownerOnly = false;
		this.giveAmount = 2;
		this.description = 'Give snakes to someone!';
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? snake?plural?!';
		this.brokeMsg = ', you do not have any snakes! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? gave you 2 snakes!';

		this.init();
	}
}

module.exports = new Snake();
