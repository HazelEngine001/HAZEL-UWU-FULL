/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

const ban = require('../../../utils/ban.js');

module.exports = new CommandInterface({
	alias: ['bancommand', 'bc'],

	owner: true,
	admin: true,

	execute: async function (p) {
		// Check if enough arguments
		if (p.args.length < 2) {
			p.errorMsg(', Invalid arguments!');
			return;
		}

		// Check if its an id
		let user = await p.fetch.getUser(p.args[0]);
		if (!user) {
			p.errorMsg(', Invalid user');
			return;
		}

		// Check if its a valid command
		let command;
		command = p.aliasToCommand[p.args[1]];
		if (!command) {
			p.errorMsg(', That is not a command!');
			return;
		}

		// Parse reason
		let reason = p.args.slice(2).join(' ');
		if (!reason || reason == '') reason = 'no reason given';

		await ban.banCommand(p, user, command, reason);
	},
});
