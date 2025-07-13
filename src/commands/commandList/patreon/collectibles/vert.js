/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Vert extends Collectible {
	constructor() {
		super();

		this.key = 'vert';
		this.emoji = '<:vert:1056448345251512360>';
		this.owners = ['963635559266390066'];
		this.fullControl = false;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = 'Send a vert to someone!';
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? Vert?plural?!';
		this.brokeMsg = ', you do not have any Verts! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? gave you 1 Vert!';

		this.init();
	}
}

module.exports = new Vert();
