/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const CommandInterface = require('../../CommandInterface.js');

const surveyEmoji = '📝';

module.exports = new CommandInterface({
	alias: ['survey'],

	args: '',

	desc: 'View the latest survey! Surveys can help us improve the bot.',

	example: [],

	related: ['owo daily'],

	permissions: ['sendMessages', 'embedLinks', 'attachFiles'],

	group: ['utility'],

	cooldown: 10000,
	half: 100,
	six: 500,

	execute: async function () {
		const uid = await this.global.getUid(this.msg.author.id);
		const { inProgress, newSurvey } = (await getSurvey.bind(this)(uid)) || {};

		if (inProgress) {
			await this.replyMsg(surveyEmoji, ', You already have a survey in progress!');
			return;
		}

		if (!newSurvey) {
			await this.replyMsg(surveyEmoji, ', There is no survey available.');
			return;
		}

		const components = [
			{
				type: 1,
				components: [
					{
						type: 2,
						label: 'Answer Survey',
						style: 1,
						custom_id: 'survey',
						emoji: {
							id: null,
							name: surveyEmoji,
						},
					},
				],
			},
		];

		await this.replyMsg(surveyEmoji, {
			content: ', There is a survey available! Complete it to earn a reward!',
			components,
		});
	},
});

async function getSurvey(uid) {
	const con = await this.startTransaction();
	let userSurvey, survey;
	try {
		let sql = `SELECT * FROM user_survey WHERE uid = ${uid};`;
		sql +=
			'SELECT * FROM survey_question WHERE sid = (SELECT sid FROM survey ORDER BY sid DESC LIMIT 1);';
		const result = await con.query(sql);

		userSurvey = result[0][0];
		survey = result[1];

		await con.commit();
	} catch (err) {
		console.error(err);
		con.rollback();
		return;
	}

	// Survey does not exist
	if (!survey[0]) {
		return;
	}

	// User's first time survey
	if (!userSurvey) {
		return { newSurvey: survey };
	}

	// User in a survey
	if (userSurvey.in_progress) {
		return { inProgress: true };
	}

	// User finished latest survey
	if (userSurvey.sid == survey[0].sid && userSurvey.is_done) {
		return;
	}

	return { newSurvey: survey };
}
