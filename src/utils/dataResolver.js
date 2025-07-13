/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const request = require('request').defaults({ encoding: null });

exports.urlToBufferString = function (url) {
	return new Promise(function (res, rej) {
		try {
			request.get(url, (error, response, body) => {
				if (!error && response.statusCode == 200) {
					let data =
						'data:' +
						response.headers['content-type'] +
						';base64,' +
						Buffer.from(body).toString('base64');
					res(data);
				} else {
					rej('Failed to fetch image');
				}
			});
		} catch (err) {
			rej('Failed to fetch image');
		}
	});
};

exports.urlToBuffer = function (url) {
	return new Promise(function (res, rej) {
		try {
			request.get(url, (error, response, body) => {
				if (!error && response.statusCode == 200) {
					res(Buffer.from(body));
				} else {
					rej('Failed to fetch image');
				}
			});
		} catch (err) {
			rej('Failed to fetch image');
		}
	});
};
