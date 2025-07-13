/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['addannouncement'],

	owner: true,

	execute: async function (p) {
		try {
			let url = p.args[0];
			let data = await p.DataResolver.urlToBuffer(url);
			await p.send('This is a test message! Does it look ok?', null, {
				file: data,
				name: 'announcement.png',
			});
			let sql = 'INSERT INTO announcement (url) VALUES (?)';
			await p.query(sql, [url]);
			await p.send('Added new announcement!');
		} catch (err) {
			p.errorMsg(', failed to add announcement');
		}
	},
});
