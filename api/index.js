const api = module.exports = require('express').Router()

api
  .use('/map', require('./map'))

api.use((req, res) => res.status(404).end())