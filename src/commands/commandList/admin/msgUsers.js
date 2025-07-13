/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['msgusers'],

	owner: true,
	admin: true,

	execute: async function () {
		const lines = this.args.join(' ').split(/\n+/gi);
		let users = {};
		let message = '';
		let collectingUsers = false;
		for (let i = 0; i < lines.length; i++) {
			if (collectingUsers || this.global.isUser('<@' + lines[i].trim() + '>')) {
				collectingUsers = true;
				users[lines[i].trim()] = true;
			} else {
				message += lines[i] + '\n';
			}
		}

		const usernames = [];
		for (let key in users) {
			try {
				const user = await this.sender.msgUser(key, message);
				if (!user) {
					this.errorMsg(', could not message: ' + key);
				} else {
					usernames.push('`' + this.global.getUniqueName(user) + '`');
				}
			} catch (err) {
				console.error(err);
				this.errorMsg(', could not message: ' + key);
			}
		}

		this.send('Sent messages to: ' + usernames.join(','));
	},
});
