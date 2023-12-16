const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

route.post('/layout', controller.create)
route.get('/layout', controller.read)


module.exports = route