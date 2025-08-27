const router = require("express").Router();
const { errorNotFound } = require("../controllers/clothingItems");

const userRouter = require("./users");
const clothingRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/items", clothingRouter);

router.use("*", (req, res) => {
  res.status(errorNotFound).send({ message: "Requested resource not found" });
});

module.exports = router;
