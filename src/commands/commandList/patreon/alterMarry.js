/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const _blank = '<:blank:427371936482328596>';

exports.alter = function (p, embed, opt) {
	switch (p.msg.author.id) {
		case '460987842961866762':
			return estee(p, embed, opt);
		default:
			return embed;
	}
};

function estee(p, embed, _opt) {
	embed.image = {
		url: 'https://i.imgur.com/SBwHXU8.gif',
	};
	return embed;
}
