const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static('client'));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')));

app.listen(4567, () => console.log("Server running on Port 4567"));
