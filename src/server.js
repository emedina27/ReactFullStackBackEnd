import express from "express";
import bodyParser from "body-parser";

const articlesInfo = {
  "learn-react": {
    upvotes: 0,
    comments: []
  },
  "learn-node": {
    upvotes: 0,
    comments: []
  },
  "my-thoughts-on-resumes": {
    upvotes: 0,
    comments: []
  }
};

/*Installing MongoDB
- After Install :
- Terminal: "sudo mkdir -p /data/db"
- Terminal: "sudo chown -R `id -un` data/db"
- Start Server: mongod
- Start db: mongo
- create new db: use my-app
- mongodb has a or many collection  ->  any numb of json objects --> each object called documents

-Added to db array of objects
------------------------
db.articles.insert([{
    name: 'learn-react',
... upvotes: 0,
... comments: [],
... }, {
... name: 'learn-react',
... upvotes: 0,
... comments: [],
... }, {
... name: 'learn-node',
... upvotes: 0,
... comments: [],
... }])
-------------------------
commands inside db:

db.articles.find({}).pretty()
db.articles.find({name: 'learn-react'}).pretty()


*/

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
  articlesInfo[articleName].upvotes += 1;

  //sending message
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes.`
    );
});

/*
-------- COMMENT FUNCTION -----------------------------
curly braces is the body of our call back (req,res).
test in postman to detemrien what the body will look like.
-Send request to add comment end-point.
- In PostMan apply url + path in Post.
- selected options in PostMan: Post, Body, Raw, JSON
- Fill Body content json format
- access data via via app.post...
- Data needed is in req.body
- "   "   "   " "username" and "text" 
- get articleName form url params
- Next Just add the new comment in the req.body to      comments [] in the selected article.
*/
app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;

  // get articleName form url params
  const articleName = req.params.name;

  /*
  accesses array ->Name->comments then adds the username and text via .push
  saving the previous push
  */
  articlesInfo[articleName].comments.push({ username, text });

  // respsonse (200)
  res.status(200).send(articlesInfo[articleName]);

  // res.status(200).send(articlesInfo[articleName]);
});

/* --- Misc Gets and Post ------*/
// app.get("/hello", (req, res) => res.send("Hello "));

/* server side: server takes value out pf specified section of url and put it into       response using url params */

// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

//client side
// app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));

//listen on port...
app.listen(8000, () => console.log("Listening on port 8000"));
