/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['addpet'],

	owner: true,

	execute: async function () {
		const name = this.args[0];
		const id = this.args[1];

		const animal = this.global.validAnimal(name);
		if (!animal) {
			return this.errorMsg(', Unknown animal');
		}
		if (!this.global.isInt(id)) {
			return this.errorMsg(', Invalid user id');
		}

		const sql = `INSERT INTO animal (id, name, count, totalcount) VALUES (?, ?, 1, 1);`;
		const result = await this.query(sql, [id, animal.value]);
		this.send(`\`\`\`\n${JSON.stringify(result, null, 2)}\n\`\`\``);
	},
});
