/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


let cooldown = 3000;
let onCooldown = false;

const request = require('request');

exports.handle = async function (main, _message) {
	if (onCooldown) return;
	onCooldown = true;
	setTimeout(function () {
		onCooldown = false;
	}, cooldown);

	request(
		{
			method: 'POST',
			uri: process.env.SHARDER_HOST + '/update-shard',
			json: true,
			body: fetchInfo(main),
		},
		function (err) {
			if (err) {
				console.error(err);
				throw err;
			}
		}
	);
};

function fetchInfo(main) {
	let result = { password: process.env.SHARDER_PASS };
	let shards = main.bot.shards;

	shards.forEach(function (val) {
		result[val.id] = {
			shard: val.id,
			status: val.status,
			ping: val.latency,
			start: main.bot.uptime,
			cluster: main.clusterID,
			updatedOn: new Date(),
		};
	});

	return result;
}
