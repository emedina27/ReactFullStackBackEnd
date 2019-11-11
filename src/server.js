import express from "express";
import bodyParser from "body-parser";

// Request Types: Get,Post(+requestbody),Patch,Delete
// run: npx babel-node src/server.js
// Added body parser dependencies

const app = express();

//Parses json object that is included with post request.
app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello "));

//server side
app.get("/hello/:name"), (req, res) => res.send(`Hello ${req.params.name}`);

//client side
app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));


//listen on port...
app.listen(8000, () => console.log("Listening on port 8000"));
