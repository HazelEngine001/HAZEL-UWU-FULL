/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


module.exports = class Logs {
	constructor() {
		this.logs = [];
	}

	push(log, subLogs) {
		if (log) {
			if (log instanceof Logs) for (let i in log.logs) this.logs.push(log.logs[i]);
			else if (typeof log === 'string' || log instanceof String) this.logs.push(log);
			else if (log.logs instanceof Logs)
				for (let i in log.logs.logs) this.logs.push(log.logs.logs[i]);
		}
		if (subLogs) this.addSubLogs(subLogs);
	}

	addSubLogs(subLogs) {
		if (!subLogs) return;
		for (let i = 0; i < subLogs.logs.length; i++) {
			this.logs.push(`  ${subLogs.logs[i]}`);
		}
	}

	toString() {
		let result = '';
		for (let i in this.logs) {
			result += this.logs[i] + '\n';
		}
		return result;
	}
};
