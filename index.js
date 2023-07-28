const express = require("express");
const app = express();
const db = require("./db/db.config")
const bookRoutes = require("./route/book.route")
require("dotenv").config();
require("./model/index.model")

//define middlewares
app.use(express.json())
app.use("/book", bookRoutes)


app.listen(process.env.PORT, async () => {
     console.log("Server is started at port:", process.env.PORT)
     try {
          await db.authenticate()
          console.log("db connected!")
     } catch (err) {
          console.log(err)
          process.exit(1)
     }
})