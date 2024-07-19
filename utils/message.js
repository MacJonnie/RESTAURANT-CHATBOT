const moment = require("moment");

function message(username, text) {
	return {
		username,
		text,
		time: moment().format("h:mm a"),
	};
}

module.exports = message; 


/* eslint-disable node/no-unsupported-features/es-syntax */
// import mongoose from 'mongoose';
// const
// const mongoose = require("mongoose");
// const { Schema } = require("mongoose");



// function message(username, text) {
// 	return {
// 		username,
// 		text,
// 		time: moment().format("h:mm a"),
// 	};
// }

// module.exports = message;