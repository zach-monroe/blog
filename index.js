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
});
app.listen(port, () => {
  console.log(`Server is live at port ${port} .`);
});

var posts = [];

// TODO: Make header
// TODO: Make footer
// TODO: Style posts
// TODO: Make Example Posts
// TODO: Make Navbar
