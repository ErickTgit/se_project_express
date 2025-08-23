const router = require("express").Router();
const { createItem, getItems } = require("../controllers/clothingItems");

router.get("/", getItems);
// router.get("/:userId", getUser);
router.post("/", createItem);

module.exports = router;
