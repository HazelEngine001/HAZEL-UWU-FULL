/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, cải tiến và cá nhân hoá bởi Sám Phùng
 * Phiên bản độc quyền sử dụng cá nhân
 */
require('dotenv').config();
if (!process.env.BOT_TOKEN) {
	console.error('Bot token not found in ~/.env file. Checking secret file instead...');
	require('dotenv').config({ path: './secret/env' });
	if (!process.env.BOT_TOKEN) {
		console.error('No bot token found. Please edit ./secret/env file and add your token');
		return;
	}
}

// Config file
const config = require('./src/data/config.json');

// Grab tokens and secret files
const debug = config.debug;
if (!debug) require('dd-trace').init();

const rateLimitUtil = require('./utils/rateLimitUtil.js');
const request = require('./utils/request.js');
// Eris-Sharder
const Sharder = require('eris-sharder').Master;
var result, shards, firstShardID, lastShardID;
const cluster = require('cluster');

let clusters = 60;

(async () => {
	try {
		//determine how many shards we will need for this manager
		if (!debug && cluster.isMaster) {
			result = await request.fetchInit();
			console.log(result);
			shards = parseInt(result['shards']);
			firstShardID = parseInt(result['firstShardID']);
			lastShardID = parseInt(result['lastShardID']);
		}
		if (debug) {
			shards = 1;
			firstShardID = 0;
			lastShardID = 0;
			clusters = 1;
		}

		console.log(
			'Creating shards ' + firstShardID + '~' + lastShardID + ' out of ' + shards + ' total shards!'
		);
		console.log("🤖 UWU BOT được phát triển bởi Sám Phùng đã khởi động thành công!");

		// Start sharder
		const sharder = new Sharder('Bot ' + process.env.BOT_TOKEN, config.sharder.path, {
			name: config.sharder.name,
			clientOptions: config.eris.clientOptions,
			debug: true,
			shards,
			clusters,
			firstShardID,
			lastShardID,
		});

		if (cluster.isMaster) {
			rateLimitUtil.init(sharder.bucket, debug);
		}
	} catch (e) {
		console.error('Failed to start eris sharder');
		console.error(e);
	}
})();

require('./keep_alive');  // Khởi động keep_alive.js
