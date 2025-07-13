/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const request = require('request');

exports.fetchInit = function () {
	return new Promise((resolve, reject) => {
		const url = `${process.env.SHARDER_HOST}/sharder-info/${process.env.SHARDER_SERVER}`;
		request.get(url, (err, res, body) => {
			if (err) reject(err);
			else if (res.statusCode == 200) resolve(JSON.parse(body));
			else reject(res);
		});
	});
};
