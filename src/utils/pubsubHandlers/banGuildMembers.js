/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const banEmoji = '<:ban:444365501708107786>';

exports.handle = async function (main, message) {
	let { guildId, replyChannel } = JSON.parse(message);
	if (!guildId || !replyChannel) return;

	const guild = main.bot.guilds.get(guildId);
	if (!guild) return;

	let memberIds = [];
	let memberSql = [];
	let memberCount = 0;
	let log = '';
	guild.members.forEach((member) => {
		memberIds.push(member.id);
		memberSql.push(`(${member.id}, NOW(), 1, 999999)`);
		log += member.id + ',';
		memberCount++;
	});
	console.log(log);

	const sql = `INSERT INTO timeout (id, time, count, penalty) VALUES ${memberSql.join(
		','
	)} ON DUPLICATE KEY UPDATE time = NOW(), count = count + 1, penalty = 999999;`;
	await main.mysqlhandler.query(sql);

	let userList = '';
	for (let i in memberIds) {
		userList += memberIds[i] + ', ';
		if (!((parseInt(i) + 1) % 10) && i + 1 != memberIds.length) {
			userList += '\n';
		}
	}
	userList = userList.slice(0, -2);
	const buffer = Buffer.from(userList, 'utf8');

	const msg = `${banEmoji} **|** Banned ${memberCount} members from **${guild.name}**.`;
	main.bot.createMessage(replyChannel, msg, { file: buffer, name: 'list.txt' });
};
