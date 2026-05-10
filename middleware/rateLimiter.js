const rateLimit = require("express-rate-limit");

function generalLimiter(ip) {
	rateLimit({
		windowMs: 60 * 1000,
		max: 10,
		standardHeaders: true,
		legacyHeaders: false,
		message: { status: 429, error: "Too many requests, try again later." },
	});
}

module.exports = {
    generalLimiter,
};
