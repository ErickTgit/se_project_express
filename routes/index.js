const router = require("express").Router();

const userRouter = require("./users");
// const clothingRouter = require("./clothingItem");

router.use("/users", userRouter);

module.exports = router;
