const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root: __dirname}); // TODO: add file path here
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})