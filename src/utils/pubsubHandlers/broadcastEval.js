/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


exports.handle = async function (main, message) {
	const { js, channel } = JSON.parse(message);
	const shardId = main.bot.shards.values().next().value.id;
	setTimeout(() => {
		let result;
		try {
			result = evalInContext(js, main);
		} catch (err) {
			result = err;
		}
		main.bot.createMessage(channel, `\`\`\`js\n${result}\n\`\`\``);
	}, shardId * 500);
};

function evalInContext(js, context) {
	return function () {
		return eval(js);
	}.call(context);
}
