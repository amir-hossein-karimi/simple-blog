import express from "express";

const articles = [
  {
    name: "react",
    vote: 0,
    comments: [],
  },
  {
    name: "nodejs",
    vote: 0,
    comments: [],
  },
  {
    name: "react native",
    vote: 0,
    comments: [],
  },
];

const app = express();

app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articles.find((item) => item.name === name);

  if (article) {
    article.vote += 1;

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
