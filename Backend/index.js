const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const articlesRoute = require('./routes/articles')

require('dotenv').config


//Middleware
app.use(express.json())
app.use(helmet())
app.use(cors())

const PORT = process.env.PORT || 3001

//ROUTES
app.use('/vimotiv/blog', articlesRoute)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})