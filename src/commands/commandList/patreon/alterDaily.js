/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

const alterUtils = require('../../../utils/alterUtils.js');

exports.alter = async function (p, alterInfo) {
	let type = 'display';
	let replacers = {
		username: p.getName(alterInfo.user),
		user_tag: p.getTag(alterInfo.user),
		blank: p.config.emoji.blank,
		amount: alterInfo.amount,
		streak: alterInfo.streak,
		box_emoji: alterInfo.box_emoji,
		box_name: alterInfo.box_name,
		cooldown: alterInfo.cooldown,
	};
	if (alterInfo.marriage) {
		type = 'marriage';
		replacers.ring_name = alterInfo.ring_name;
		replacers.ring_emoji = alterInfo.ring_emoji;
		replacers.marriage_amount = alterInfo.marriage_amount;
		replacers.marriage_box_emoji = alterInfo.marriage_box_emoji;
		replacers.marriage_box_name = alterInfo.marriage_box_name;
		replacers.marriage_streak = alterInfo.marriage_streak;
		replacers.partner = p.getName(alterInfo.partner);
		replacers.partner_tag = p.getTag(alterInfo.partner);
	} else if (alterInfo.isCooldown) {
		type = 'cooldown';
		replacers = {
			username: p.getName(alterInfo.user),
			user_tag: p.getTag(alterInfo.user),
			blank: p.config.emoji.blank,
			streak: alterInfo.cowoncyInfo.daily_streak,
			cooldown: alterInfo.cooldown,
		};
		if (alterInfo.marriageInfo) {
			replacers.marriage_streak = alterInfo.marriageInfo.dailies;
		}
	}

	return alterUtils.getAlterCommand('daily', alterInfo.user, type, replacers);
};
