import Logic from "./Logic";
const logic = new Logic("/index", "/404");
logic.addUser({ name: "User1", page: "/user1" });
logic.addUser({ name: "User2", page: "/user2" });
logic.addUser({ name: "User3", page: "/user3" });

import express from "express";
const app = express();
app.get("/", (req, res) => {
	const username = req.query["user"];
	if (typeof username !== "string" && typeof username !== "undefined") return res.status(400);

	const result = logic.resolveUser(username);

	return res.send("Redirecting to:" + result);
});
app.listen(80, () => console.log("Started 1"));
