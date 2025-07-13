/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

let captcha;
try {
	captcha = require('../../../../../tokens/captcha.js');
} catch (err) {
	console.error('Could not find captcha.js admin captcha command will not work');
}

module.exports = new CommandInterface({
	alias: ['captcha'],

	owner: true,

	execute: async function (p) {
		const opts = {};
		if (p.args[0] == 'link') {
			opts.forceUrl = true;
		} else if (p.args[0] == 'image') {
			opts.noUrl = true;
		}
		let { url, text, buffer } = await captcha.gen(opts, p.msg.author);
		if (url) {
			p.send(url);
		} else {
			p.send(text, null, { file: buffer, name: 'captcha.png' });
		}
	},
});
