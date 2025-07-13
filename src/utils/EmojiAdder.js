/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const snailEmoji = '�';

module.exports = class EmojiAdder {
	constructor(p, emoji) {
		this.p = p;
		this.name = emoji.name;
		this.url = emoji.url;
		this.isSticker = emoji.isSticker;
		this.progress = new Set();
		this.success = new Set();
		this.failure = new Set();
		this.buffer = null;
	}

	async addEmoji(userId) {
		if (this.success.has(userId)) return;
		if (this.progress.has(userId)) return;
		this.progress.add(userId);

		// Fetch guild id
		let sql = `SELECT emoji_steal.guild FROM emoji_steal INNER JOIN user ON emoji_steal.uid = user.uid WHERE id = ${userId};`;
		let result = await this.p.query(sql);
		if (!result || !result[0]) {
			this.progress.delete(userId);
			return;
		}
		let guildId = result[0].guild;

		// Add emoji to guild
		try {
			if (!this.buffer) {
				if (this.isSticker) {
					this.buffer = await this.p.DataResolver.urlToBuffer(this.url);
				} else {
					this.buffer = await this.p.DataResolver.urlToBufferString(this.url);
				}
			}
			if (this.isSticker) {
				await this.p.client.createGuildSticker(
					guildId,
					{
						description: `Added by ${userId}`,
						file: {
							file: this.buffer,
							name: 'sticker.png',
						},
						name: this.name,
						tags: snailEmoji,
					},
					`Requested by ${userId}`
				);
			} else {
				await this.p.client.createGuildEmoji(
					guildId,
					{ name: this.name, image: this.buffer },
					`Requested by ${userId}`
				);
			}
		} catch (err) {
			this.failure.add(userId);
			this.progress.delete(userId);
			throw err;
		}
		this.success.add(userId);
		this.progress.delete(userId);
		return true;
	}

	get successCount() {
		return this.success.size;
	}

	get failureCount() {
		return this.failure.size;
	}
};
