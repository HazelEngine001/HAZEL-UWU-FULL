/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['eval'],

	owner: true,

	execute: async function () {
		const js = this.context.replace(/^```\w*/gi, '').replace(/```$/gi, '');
		let result;
		try {
			result = evalInContext(js, this);
		} catch (err) {
			result = err;
		}
		this.send(`\`\`\`js\n${result}\n\`\`\``);
	},
});

function evalInContext(js, context) {
	return function () {
		return eval(js);
	}.call(context);
}
