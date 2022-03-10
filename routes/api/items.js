const express = require("express");
const router = express.Router();
const auth = require("../../midlewares/auth");
// Items Model

const Item = require("../../models/item");

// @route GET api/items
// @route Get all items
// @access Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc  Create A Post
// @access Private

router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body
  });
  newItem.save().then(item => res.json(item.name));
});

// @route Delete Item
// @desc  Delete Post
// @access Private

router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
