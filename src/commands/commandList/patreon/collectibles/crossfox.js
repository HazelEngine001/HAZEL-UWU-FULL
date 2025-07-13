/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Crossfox extends Collectible {
	constructor() {
		super();

		this.key = 'crossfox';
		this.emoji = '<:crossfox:1171388724639178782>';
		this.alias = ['crossfox', 'melanisticfox'];
		this.owners = ['384202884553768961', '778204442411008021'];
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.pluralName = 'Cross Foxes';
		this.singleName = 'Cross Fox';
		this.description =
			'The cross fox is a variant of the red fox which has a long dark stripe running down its back, intersecting another stripe to form a cross over the shoulders.  Due to a rare condition called melanism, the commonly red fur comes with some dark stripe.';
		this.displayMsg = '?emoji? **| ?user?**, you currently have ?count? ?pluralName?!';
		this.brokeMsg = ', you do not have any Cross Foxes! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, ?giver? gave you 1 Cross Fox!';

		this.init();
	}
}

module.exports = new Crossfox();
