/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


// Fired when a shard resumes
exports.handle = function (id) {
	console.log('[' + id + ']--------------- Bot has resumed ---------------');
	this.logger.logstashQos('shardResume');
};
