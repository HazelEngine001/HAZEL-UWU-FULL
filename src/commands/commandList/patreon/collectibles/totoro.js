/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Totoro extends Collectible {
	constructor() {
		super();

		this.key = 'totoro';
		this.emoji = '<:totoro:1288015785603760201>';
		this.owners = ['777641801212493826', '193140307326402562', '942100445105647686'];
		this.pluralName = 'Totoro';
		this.singleName = 'Totoros';
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = `"Try Laughing. Then Whatever Scares You Will Go Away”.\nWe hope this Forest Spirit never lets you feel alone!`;
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? ?emoji? ?pluralName?!';
		this.brokeMsg = ', you do not have any Totoros! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? has sent you 1 ?emoji? Totoro!';

		this.init();
	}
}

module.exports = new Totoro();
