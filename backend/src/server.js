import express from "express";
import { MongoClient } from "mongodb";

const articles = [];

const app = express();

app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("simple-blog");

    const article = await db.collection("articles").findOne({ name });

    if (article) {
      res.send(article);
    } else {
      res.statusCode = 404;
      res.send("article not found");
    }
  } catch (e) {
    console.log(e);
    res.send("has error");
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("simple-blog");

  await db.collection("articles").updateOne({ name }, { $inc: { vote: 1 } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(`The ${name} article now has ${article.vote} upvotes!!!`);
  } else {
    res.send("that article dosnt exist");
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { postedBy, text } = req.body;
  const { name } = req.params;

  const article = articles.find((item) => item.name === name);

  if (article) {
    article.comments.push({
      postedBy,
      text,
    });

    res.send(articles);
  } else {
    res.send("that article dosnt exist");
  }
});

app.listen(8000, () => {
  console.log("server is listening on port 8000");
});
