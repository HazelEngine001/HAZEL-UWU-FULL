/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

class InteractionHandler {
	constructor(main) {
		this.buttons = new (require('./button'))(main);
	}
}

module.exports = InteractionHandler;
