/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const requireDir = require('require-dir');
const dir = requireDir('./');

class EventHandler {
	constructor(main) {
		let filename = __filename.slice(__dirname.length + 1, -3);
		for (let listener in dir) {
			if (listener != filename) main.bot.on(listener, dir[listener].handle.bind(main));
		}
	}
}

module.exports = EventHandler;
