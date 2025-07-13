/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

const pub = require('redis').createClient({
	host: process.env.REDIS_HOST,
	password: process.env.REDIS_PASS,
});

exports.resetBot = async function () {
	pub.publish('endProcess', true);
};
