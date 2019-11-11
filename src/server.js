import express from "express";
import bodyParser from "body-parser";

const articleInfo = {
  "learn-react": {
    upvotes: 0
  },
  "learn-node": {
    upvotes: 0
  },
  "my-thoughts-on-resumes": {
    upvotes: 0
  }
};

// Request Types: Get,Post(+requestbody),Patch,Delete
// run: npx babel-node src/server.js
// Added body parser dependencies

const app = express();

//Parses json object that is included with post request.
app.use(bodyParser.json());

//define a new end point to send request to update upvotes via post request

app.post("/api/articles/:name/upvote", (req, res) => {
  //get name form params
  const articleName = req.params.name;

  //target upvotes
  articleInfo[articleName].upvotes += 1;

  //sending message
  res
    .status(200)
    .send(
      `${articleName} now has ${articleInfo[articleName].upvotes} upvotes.`
    );
});

// app.get("/hello", (req, res) => res.send("Hello "));

/* server side: server takes value out pf specified section of url and put it into       response using url params */

// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

//client side
// app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));

//listen on port...
app.listen(8000, () => console.log("Listening on port 8000"));
