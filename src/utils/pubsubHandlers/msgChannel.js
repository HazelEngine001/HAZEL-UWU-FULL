/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	let { channelID, msg } = JSON.parse(message);
	if (main.debug) return;
	if (!main.bot.channelGuildMap[channelID]) return;
	main.bot.createMessage(channelID, msg);
};
