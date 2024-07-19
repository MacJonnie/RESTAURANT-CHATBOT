const mongoose = require("mongoose");
require("dotenv").config();

function mongodbConnect(server) {
    // Handeling query filters
	mongoose.set("strictQuery", false);

	mongoose
            .connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() =>
			server.listen(process.env.PORT, () => {
                console.log(`MongoDB Server started Successfully!`);
			})
		)
		.catch((err) => console.log(err));
}

module.exports = { mongodbConnect };