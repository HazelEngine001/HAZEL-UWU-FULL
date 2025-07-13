/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const _blank = '<:blank:427371936482328596>';
const _check = '☑';
const box = '⬛';
const tada = '🎉';

exports.alter = function (id, opt) {
	switch (id) {
		case '460987842961866762':
			return estee(opt);
		default:
			return opt.embed;
	}
};

function estee(opt) {
	let embed = opt.embed;
	embed.color = 8421504;
	embed.author.name = "꧁༺𝔼𝕤𝕥𝕖𝕖'𝕤 𝔻𝕖𝕒𝕥𝕙 ℕ𝕠𝕥𝕖༻꧂";
	const tasks = [
		'♤|Time of Death noted!',
		'◇|Souls collected!',
		'♧|Blood consumed!',
		'♡|Bodies collected!',
		'♧|Bodies all buried!',
		'◇|Bones all counted!',
		'♤|Death note sealed & burned!',
	];
	embed.description = '';
	const check = '<a:check:993728851190485072>';
	for (let i = 0; i < opt.tasks.length; i++) {
		const task = opt.tasks[i];
		embed.description += `${task.done ? check : box} ${tasks[i]}\n`;
	}
	if (opt.reward) {
		embed.description += `${check} ${tada} You earned 1,000 ${opt.emoji.cowoncy}, 1 ${opt.emoji.lootbox}, 1 ${opt.emoji.crate}, 100 ${opt.emoji.shards}, and 1 ${opt.emoji.cookie}!`;
	} else if (opt.done) {
		embed.description += `${check} ${tada} You already claimed your checklist rewards!`;
	} else {
		embed.description += `${box} ${tada} Complete your checklist to get a reward!`;
	}

	return embed;
}
