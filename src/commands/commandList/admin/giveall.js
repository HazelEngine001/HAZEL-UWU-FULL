/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['giveall'],

	owner: true,

	execute: async function (p) {
		let amount = 0;
		if (p.global.isInt(p.args[0])) amount = parseInt(p.args[0]);
		else return;
		let users = p.global.getids(p.msg.channel.guild.members);
		let sql =
			'UPDATE IGNORE cowoncy SET money = money + ' + amount + ' WHERE id IN (' + users + ');';
		await p.query(sql);
		p.send('**💎 |** ' + p.getName() + ' gave @everyone ' + amount + ' cowoncy!!!');
	},
});
