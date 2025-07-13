/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Pikachu extends Collectible {
	constructor() {
		super();

		this.key = 'pikachu';
		this.alias = ['pikachu', 'chu'];
		this.emoji = '<a:pikachu:1099236809390702612>';
		this.owners = [
			'768465041489657867',
			'968621197011062804',
			'879313703990870047',
			'969176350621589514',
		];
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = `Charmeleons are red,\nWartortles are blue,\nIf you catch my heart,\nI’ll be your pikachu`;
		this.displayMsg = '?emoji? **| ?user?**, you have **?count? Pikachu?plural?**';
		this.brokeMsg = ', you do not have any Pikachus! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, you have received **1 Pikachu** from **?giver?**';

		this.init();
	}
}

module.exports = new Pikachu();
