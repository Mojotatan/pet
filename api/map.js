const fs = require('fs')

module.exports = require('express').Router()

  // this approach was abandoned
  .get('/:name', (req, res) => {
    let map = fs.readFileSync('/assets/map/' + req.params.name)
    console.log(map)
    res.send(map)
  })