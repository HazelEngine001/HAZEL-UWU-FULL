/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	const { newId, oldId } = JSON.parse(message);
	console.log(`Attempting to reinitialized animal: ${oldId} -> ${newId}`);
	main.animalUtil.deleteAnimal(oldId);
	await main.animalUtil.reinitializeAnimal(newId);
	console.log(`Succesfully reinitialized animal: ${oldId} -> ${newId}`);
};
