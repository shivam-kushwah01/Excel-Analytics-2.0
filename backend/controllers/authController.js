const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams)
  		.then(() => console.log("Connected to database successfully"))
  		.catch((err) => console.log(" Connection Error:", err));
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};