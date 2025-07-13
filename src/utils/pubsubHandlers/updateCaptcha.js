/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	let { link, image } = JSON.parse(message);
	main.macro.setCaptchaLink(!!link);
	main.macro.setCaptchaImage(!!image);
};
