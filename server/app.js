const express = require("express");
const app = express();
const cors = require('cors');

const db = require('./models')

require("dotenv/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

const adminRouter = require("./routes/adminRouter");

app.use("/admin", adminRouter)

app.get("/", (req, res) => {
  res.send("Essa é a Homepage");
});

// DB

db.sequelize.sync().then(() => {
  app.listen(5000, () =>{
    console.log('Server running')
  });
})



