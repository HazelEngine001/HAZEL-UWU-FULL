/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const Collectible = require('./CollectibleInterface.js');

class Dayang extends Collectible {
	constructor() {
		super();

		this.key = 'dayang3';
		this.alias = ['dayang', 'cinta', 'indonesia'];
		this.emoji = '<a:dayang:1098860750891655219>';
		this.owners = ['778204442411008021'];
		this.fullControl = true;
		this.ownerOnly = true;
		this.giveAmount = 1;
		this.description = `Hallo...!!\nI am dayang🌷 from Indonesia\n\nWhen you have 𝖈𝖎𝖓𝖙𝖆, 𝖐𝖆𝖘𝖎𝖍 and 𝖘𝖆𝖞𝖆𝖓𝖌, you can get my 𝖇𝖚𝖓𝖌𝖆 as a present from me...♡\n\n♧ OwOd cinta ♧ OwOd kasih ♧ OwOd sayang ♧\n♧ find me in .gg/owobot & .gg/hns`;
		this.displayMsg =
			'?emoji? **| ?user?**, you currently have **?count? ?emoji? Dayang?plural?!**';
		this.brokeMsg = ', you do not have any Dayangs! >:c';
		this.giveMsg = '?emoji? **| ?receiver?**, you have received **1 Dayang** from **?giver?**';

		this.init();
	}
}

module.exports = new Dayang();
