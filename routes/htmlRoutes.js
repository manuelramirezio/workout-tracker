var path = require("path");
const app = require("express").Router();
app.get("/", (req, res) => {
	console.log("line 5 htmlRoutes");
	res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/exercise", (req, res) => {
	console.log("line 11 htmlRoutes");
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
app.get("/stats", (req, res) => {
	console.log("line 16 htmlRoutes");
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = app;