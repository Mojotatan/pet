const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

let port = process.env.PORT || '8080'
const app = express()

app
  .use(morgan('tiny'))

  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))

  .use(express.static('public'))

  .get('/pulse', (req, res) => {
    res.sendStatus(200)
  })

  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })

const server = app.listen(port, () => {console.log(`Listening on port ${port}...`)})