/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	const { id, remove } = JSON.parse(message);
	if (!id) {
		console.error(`Invalid opt out id: ${id}`);
		return;
	}
	if (remove) {
		delete main.optOut[id];
		console.log(`Removed ${id} to opt out`);
	} else {
		main.optOut[id] = true;
		console.log(`Added ${id} to opt out`);
	}
};
