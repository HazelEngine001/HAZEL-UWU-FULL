/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

let unpauseTimer;
exports.handle = async function (main, message) {
	// Parse info
	let sec = parseInt(JSON.parse(message));
	if (!sec) return;
	clearTimeout(unpauseTimer);

	main.pause = true;

	console.log(`Pausing this shard for ${sec} seconds`);
	unpauseTimer = setTimeout(() => {
		main.pause = false;
		unpauseTimer = null;
		console.log(`Unpausing this shard`);
	}, sec * 1000);
};
