/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['duwasvivu'],

	args: '',

	desc: 'This command was created by ?666840617380478977?',

	example: [],

	related: [],

	permissions: ['sendMessages'],

	group: ['patreon'],

	cooldown: 10000,
	half: 80,
	six: 400,
	bot: false,

	execute: async function (p) {
		p.send("Hi i'm duwas");
	},
});
