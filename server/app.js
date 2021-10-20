const express = require("express");
const app = express();
const cors = require('cors');

const db = require('./models')

const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

const adminRouter = require("./routes/adminRouter");

app.use("/admin", adminRouter)

app.get("/", (req, res) => {
  res.send("Essa é a Home");
});

// DB

db.sequelize.sync().then(() => {
  app.listen(5000, () =>{
    console.log('Server running')
  });
})



