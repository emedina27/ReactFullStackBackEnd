import express from "express";

// run: npx babel-node src/server.js
const app = express();

app.get("/hello", (req, res) => res.send("Hello Bob!"));

app.listen(8000, () => console.log("Listening on port 8000"));
