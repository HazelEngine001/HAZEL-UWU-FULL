/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */

const patreonUtil = require('../commands/commandList/patreon/utils/patreonUtil.js');

exports.handle = function (packet, _id) {
	if (packet.t === 'INTERACTION_CREATE') {
		switch (packet.d.type) {
			// Buttons
			case 3:
				handleMessageComponent.bind(this)(packet);
				break;
		}
	} else if (packet.t === 'ENTITLEMENT_CREATE') {
		patreonUtil.handleDiscordUpdate.bind(this)(packet.d);
	} else if (packet.t === 'ENTITLEMENT_UPDATE') {
		patreonUtil.handleDiscordUpdate.bind(this)(packet.d);
	} else if (packet.t === 'ENTITLEMENT_DELETE') {
		patreonUtil.handleDiscordDelete.bind(this)(packet.d);
	}
};

function handleMessageComponent(packet) {
	this.interactionHandlers.buttons.emit(packet.d.data.custom_id, packet.d) ||
		this.interactionCollector.interact(packet.d);
}
