const express = require('express')
const route = express.Router()
const controller = require('../controller/dataController')

route.post('/data', controller.create)
// route.get('/data', controller.read)


module.exports = route