/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const dailyWeaponUtil = require('../../commands/commandList/battle/util/dailyWeaponUtil.js');

exports.handle = async function (main, message) {
	if (main.debug) return;
	let { shardID } = JSON.parse(message);
	if (!main.bot.shards.has(shardID)) return;
	await dailyWeaponUtil.resetDailyWeapons();
};
