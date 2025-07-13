/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

const request = require('request');

let influxErrorShown = false;

exports.init = function (bucket, debug) {
	setInterval(() => {
		logBucket(bucket, debug);
	}, 10000);
};

async function logBucket(bucket, debug) {
	const { concurrent, queueCount, bucketCount, waiting } = bucket.getState();
	const body = {
		password: process.env.INFLUXDB_PASS,
		metric: 'ratelimit',
		server: process.env.SHARDER_SERVER,
		concurrent,
		queueCount,
		bucketCount,
		waiting,
	};

	if (debug) {
		body.debug = true;
	}

	request(
		{
			method: 'POST',
			uri: `${process.env.INFLUXDB_HOST}/qos`,
			json: true,
			body: body,
		},
		function (err) {
			if (err && !influxErrorShown) {
				console.error('InfluxDB is inactive. Log upload will not work.');
				influxErrorShown = true;
				throw err;
			}
		}
	);
}
