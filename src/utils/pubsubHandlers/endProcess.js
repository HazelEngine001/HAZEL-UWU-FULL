/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


let timer;

exports.handle = async function (main, _message) {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	}
	const time = main.clusterID * 3 * 60 * 1000;
	console.log('ending ' + main.clusterID + ' in ' + time + 'ms');
	timer = setTimeout(() => {
		process.exit(0);
	}, time);
};
