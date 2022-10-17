const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from nodejs')
})

app.post('/post', (req, res) => {
  console.log('Connected to React')
  res.redirect('/')
})

const PORT = 5000

app.listen(PORT, console.log(`Server running at port ${PORT}`))
