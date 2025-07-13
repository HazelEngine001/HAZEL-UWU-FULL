/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const surveyEmoji = '📝';

exports.handle = async function (data, ack) {
	const user = data.member.user;
	const uid = await this.global.getUid(user.id);

	if (!(await startSurvey.bind(this)(user, uid))) {
		return;
	}

	await ack();
};

async function startSurvey(user, uid) {
	const con = await this.mysqlhandler.startTransaction();

	try {
		let sql = `SELECT * FROM user_survey WHERE uid = ${uid};`;
		sql +=
			'SELECT * FROM survey_question WHERE sid = (SELECT sid FROM survey ORDER BY sid DESC LIMIT 1);';
		let result = await con.query(sql);

		const userSurvey = result[0][0];
		const survey = result[1];

		// Survey does not exist
		if (!survey[0]) {
			con.rollback();
			return false;
		}

		// User's first time survey
		if (!userSurvey) {
			sql = `INSERT IGNORE INTO user_survey (uid, sid) VALUES (${uid}, ${survey[0].sid})`;
			await con.query(sql);

			// User in a survey
		} else if (userSurvey.in_progress) {
			con.rollback();
			return false;

			// User finished latest survey
		} else if (userSurvey.sid == survey[0].sid && userSurvey.is_done) {
			con.rollback();
			return false;
		}

		sql = `UPDATE user_survey us
				SET us.in_progress = 1,
					us.sid = ${survey[0].sid},
					us.question_number = 1,
					us.is_done = 0
				WHERE us.uid = ${uid};`;
		result = await con.query(sql);
		if (!result.changedRows) {
			con.rollback();
			return false;
		}

		let text = `${surveyEmoji} **|** Thanks for participating in the survey! There are ${survey.length} questions.`;
		text += `\n${this.config.emoji.blank} **|** You will get a reward for completing all questions.`;
		text += `\n${this.config.emoji.blank} **|** All answers are submitted anonymously.`;
		text += `\n\n**Question 1:** *${survey[0].question}*`;
		await this.sender.msgUser(user.id, text);

		await con.commit();
	} catch (err) {
		console.error(err);
		con.rollback();
		return false;
	}

	return true;
}
