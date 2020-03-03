const express = require("express");
const router = express.Router();
const posts = require("./posts.json");

//  #route GET
//  @desc Get all products
//  @access Public
router.get("/", (req, res) => {
  res.json(posts);
});
//  #route GET
//  @desc Filtering products
//  @access Public
router.get("/:id", (req, res) => {
  const post = posts.find(item => {
    if (item.id == req.params.id) {
      return item;
    }
  });
  if (!post) {
    return res.status(400).send({ msg: "Post not found" });
  }
  res.json(post);
});

router.post("/add-comment/:id", (req, res) => {
  let currentBlog = posts.filter(item => {
    return item.id === req.params.id;
  });
  let newPost = { text: req.body.text };

  currentBlog.map(item => {
    return item.comments.push(newPost);
  });

  res.json(currentBlog[0]);
});

module.exports = router;
