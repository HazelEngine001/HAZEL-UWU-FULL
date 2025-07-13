/*
 * UWU BOT (By Sám Phùng)
 * Dựa trên OwO Bot, tuỳ chỉnh và tái phát triển bởi Sám Phùng
 * Phiên bản sử dụng riêng tư – không chia sẻ lại
 */


const workerpool = require('workerpool');
const { create, all } = require('mathjs');
const math = create(all);
const limitedEvaluate = math.evaluate;
math.import(
	{
		import: function () {
			throw new Error('Function import is disabled');
		},
		createUnit: function () {
			throw new Error('Function createUnit is disabled');
		},
		evaluate: function () {
			throw new Error('Function evaluate is disabled');
		},
		parse: function () {
			throw new Error('Function parse is disabled');
		},
		simplify: function () {
			throw new Error('Function simplify is disabled');
		},
		derivative: function () {
			throw new Error('Function derivative is disabled');
		},
	},
	{ override: true }
);

function compute(expression) {
	return limitedEvaluate(expression);
}

// Not a child process if registering app commands, it will fail
if (!process.env.REGITER_COMMANDS) {
	workerpool.worker({ compute: compute });
}
