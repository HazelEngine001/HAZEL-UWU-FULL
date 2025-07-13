/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (data, ack, err) {
	const exists = await this.giveaway.giveawayExists(data.channel_id, data.member.user.id);

	if (!exists.active) {
		err(`${this.config.emoji.error} **|** This giveaway is not active!`);
		return;
	} else if (exists.uid) {
		err(`${this.config.emoji.error} **|** You are already in this giveaway!`);
		return;
	}

	const uid = await this.global.getUid(data.member.user.id);
	exists.giveawayCount = await this.giveaway.addUser(exists.channelId, uid);

	const content = await this.giveaway.createContent(exists);
	await ack(content);
};
