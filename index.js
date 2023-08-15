const express = require('express')
const app = express()
const port = 3000
//todo shadow
app.get('/tintuc', (req, res) => {
  res.send('day la trang tin tuc')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
