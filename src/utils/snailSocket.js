/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const io = require('socket.io-client');

class SnailSocket {
	constructor(main) {
		this.main = main;
		this.socket = io(process.env.SNAIL_SOCKET, {
			auth: {
				token: process.env.SNAIL_TOKEN,
			},
		});
		this.socket.on('error', (_error) => {
			console.error('SnailSocket error');
		});
		this.socket.on('disconnect', (_reason) => {
			console.error('SnailSocket disconnect');
		});
		this.socket.on('connect', () => {
			console.log('SnailSocket connected');
		});
		this.socket.on('connect_error', (_error) => {
			console.error('SnailSocket connect_error');
		});
	}

	messageChannel(channelId, contents) {
		this.socket.emit('message-channel', { channelId, contents });
	}

	userBanned(userId, isBanned) {
		this.socket.emit('user-banned', { userId, isBanned });
	}
}

module.exports = SnailSocket;
