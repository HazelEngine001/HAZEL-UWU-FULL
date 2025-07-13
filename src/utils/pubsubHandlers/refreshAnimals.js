/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	const { animalName } = JSON.parse(message);
	await main.animalUtil.reinitialize(animalName);
	if (animalName) {
		console.log(`Succesfully reinitialized animal: ${animalName}`);
	} else {
		console.log('Succesfully reinitialized animals');
	}
};
