/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const io = require('socket.io-client');

class StreamSocket {
	constructor(main) {
		this.main = main;
		this.socket = io(process.env.STREAM_SOCKET, {
			auth: {
				token: process.env.STREAM_TOKEN,
			},
		});
		this.socket.on('error', (_error) => {
			console.error('StreamSocket error');
		});
		this.socket.on('disconnect', (_reason) => {
			console.error('StreamSocket disconnect');
		});
		this.socket.on('connect', () => {
			console.log('StreamSocket connected');
		});
		this.socket.on('connect_error', (_error) => {
			// silence for now
			//console.error('StreamSocket connect_error');
		});
	}

	streamEmit(author, key) {
		this.socket.emit('press-key', {
			key,
			user: {
				id: author.id,
				username: author.username,
				globalname: author.globalname,
				discriminator: author.discriminator,
			},
		});
	}
}

module.exports = StreamSocket;
