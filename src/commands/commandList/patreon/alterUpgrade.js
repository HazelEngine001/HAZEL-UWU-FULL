/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const botEmoji = '🛠';

exports.alter = function (id, text) {
	switch (id) {
		case '255750356519223297':
			return spotifybot(text);
		default:
			return text;
	}
};

function spotifybot(text) {
	let spotify = '<a:spotify:577027003656437766>';
	return text.replace('HuntBot', 'SPOTIFYBOT').replace(botEmoji, spotify);
}
