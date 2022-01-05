const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('/sample.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})