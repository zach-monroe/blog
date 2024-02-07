import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/write", (req, res) => {
  res.render("write.ejs");
});
app.post("/submit", (req, res) => {
  var author = req.body["author"];
  var title = req.body["title"];
  var post = req.body["post"];
  posts.push({ author: author, title: title, post: post });
  res.redirect("/");
});
app.post("/edit", (req, res) => {
  var id = req.body["id"];
  res.render("write.ejs", { id: id, posts: posts });
});

app.post("/edit/submit", (req, res) => {
  var id = req.body["id"];
  var author = req.body["author"];
  var title = req.body["title"];
  var post = req.body["post"];
  posts[id] = { author: author, title: title, post: post };
  res.redirect("/");
});
app.post("/delete", (req, res) => {
  var id = req.body["id"];
  posts.splice(id, 1);
  res.render("index.ejs", { posts: posts });
});
app.listen(port, () => {
  console.log(`Server is live at port ${port} .`);
});

var posts = [
  {
    author: "C.S. Lewis",
    title: "Great Quote",
    post: "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
  },
  {
    author: "Aristotle",
    title: "Another Great Quote!",
    post: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  },
];
