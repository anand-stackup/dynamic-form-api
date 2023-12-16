const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const connectDb = require('./server/database/connection')

const app = express()

dotenv.config({ path: '.env' })
const PORT = process.env.PORT || 8080

app.use(cors())

connectDb()

app.use(express.json())

app.use('/', require('./server/routes/router'))
app.use('/', require('./server/routes/dataRouter'))

app.listen(PORT, () => {console.log(`server running on http://localhost:${PORT}`)})
