/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Dhole extends Collectible {
	constructor() {
		super();

		this.key = 'dhole';
		this.emoji = '<:dhole:1056445015074811904>';
		this.owners = ['384202884553768961'];
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description =
			'Dhole (Cuon alpinus), also known as Asian wild dog, Asiatic wild dog, Indian wild dog, whistling dog, red dog, and mountain wolf.' +
			'\nAfrican wild dog is an endangered species, with estimates that only about 2,500 remain.' +
			'\nAn endangered species is a species that is very likely to become extinct in the near future.' +
			'\nThe dhole has been described as combining the physical characteristics of the gray wolf and the red fox. ';
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? Dhole?plural?!';
		this.brokeMsg = ', you do not have any Dholes! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? gave you 1 Dhole!';

		this.init();
	}
}

module.exports = new Dhole();
