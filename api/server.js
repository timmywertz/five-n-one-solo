const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("5n1 API Server"));

app.listen(5000);
console.log("Server is Listening at 5000");
