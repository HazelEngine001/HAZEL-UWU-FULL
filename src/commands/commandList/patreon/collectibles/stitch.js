/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Stitch extends Collectible {
	constructor() {
		super();

		this.key = 'stitch';
		this.emoji = '<a:stitch:1288009365906915340>';
		this.owners = ['942100445105647686', '638420840765063178'];
		this.pluralName = 'Stitch';
		this.singleName = 'Stitch';
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = `Lilo says that "ohana means family, family means nobody gets left behind or forgotten". I hope this little alien starts to be part of your family now!`;
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? ?emoji? ?pluralName?!';
		this.brokeMsg = ', you do not have any stiches! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? has sent you 1 ?emoji? Stitch!';

		this.init();
	}
}

module.exports = new Stitch();
