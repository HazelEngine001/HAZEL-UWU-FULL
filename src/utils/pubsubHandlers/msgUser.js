/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	if (main.debug) return;
	let { shardID, userID, msg } = JSON.parse(message);
	if (!main.bot.shards.has(shardID)) return;
	main.sender.msgUser(userID, msg);
};
