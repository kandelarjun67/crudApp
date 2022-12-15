const express = require('express');
const dotenv = require('dotenv');

const app = express()

dotenv.config({path:'config.env'})
const port = process.env.port || 8080

app.get('/', (req, res) => {
  res.send('CRUD application!')
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})