const express = require("express");
const { default: mongoose } = require("mongoose");
const indexRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

//Connects to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

// temporary auth middleware
app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // <-- use your test user _id
  };
  next();
});

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
