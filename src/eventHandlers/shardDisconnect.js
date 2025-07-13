/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


// Fired when a shard disconnects
exports.handle = function (error, id) {
	console.error('[' + id + ']--------------- Bot Disconnected---------------');
	if (error) console.error('[' + id + '] ' + error.code);
	this.logger.logstashQos('shardDisconnect');
};
