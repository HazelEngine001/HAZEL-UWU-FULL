/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Lilbee extends Collectible {
	constructor() {
		super();

		this.key = 'lilbee';
		this.alias = ['lilbee'];
		this.emoji = '<:lilbee:1099451252955418735>';
		this.owners = ['635873165758824449', '423166705477353472'];
		this.fullControl = true;
		this.ownerOnly = false;
		this.giveAmount = 2;
		this.description = `Created by Lil and Bee to celebrate 1000 days of Owo marriage!`;
		this.displayMsg = '?emoji? **| ?user?**, you have **?count? Lil Bee?plural?**';
		this.brokeMsg = ', you do not have any Lil bees! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, you have received **1 Lil Bee** from **?giver?**';

		this.init();
	}
}

module.exports = new Lilbee();
