import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

// Request Types: Get,Post(+requestbody),Patch,Delete
// run: npx babel-node src/server.js
// Added body parser dependencies

const app = express();

//Parses json object that is included with post request.
app.use(bodyParser.json());

//------ connects monogodb to express ---------------------------------

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;

    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true
    });

    const db = client.db("my-app");

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error Connection to DB", error });
  }
});

//---------------- Upvoting --------------------------------------

//define a new end point to send request to update upvotes via post request

app.post("/api/articles/:name/upvote", async (req, res) => {
  try {
    //get name form params
    const articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true
    });

    const db = client.db("my-app");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    //here is the query
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1
        }
      }
    );

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
});

/*
-------- COMMENT FUNCTION -------------------------------------------------
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
  const { username, text } = req.body; // get articleName form url params
  const articleName = req.params.name;

  /*
  accesses array ->Name->comments then adds the username and text via .push
  saving the previous push
  */
  articlesInfo[articleName].comments.push({ username, text });

  // respsonse (200)
  res.status(200).send(articlesInfo[articleName]);
});

//=-----------------------------------------------------------

app.listen(8000, () => console.log("Listening on port 8000"));
