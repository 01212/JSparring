const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const {
  addPlayed,
  createChallenge,
  createLoss,
  createMatch,
  createUser,
  createWin,
  deleteChallenge
} = require("./controllers");

app.use(bodyParser.json());
app.use(cookieParser());

/*
	List of Controllers:
	- deleteChallenge
	- createMatch
	- createWin
	- createLoss
	- addPlayed
*/

app.get("/", createChallenge, (req, res, next) => {
  res.send("Hello universe");
});

app.listen(8002, () => {
  console.log(`API server listening on port ${process.env.PORT}`);
});
