const session = require("express-session");
require("dotenv").config();

const maxAge = parseInt(process.env.SESSION_MAX_AGE)

const sessionMiddleware = session({
	secret: process.env.SESSION_SECRET,
	resave: false, 
	saveUninitialized: true,
	cookie: { secure: false, maxAge },
});

module.exports = sessionMiddleware;