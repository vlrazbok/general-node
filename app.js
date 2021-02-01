const express = require("express")

const app = express()

app.get("/", function(req, res) {
  res.end("Hello it`s me!")
})

app.listen(3000)