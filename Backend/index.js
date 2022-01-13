const express = require('express')
const app = express()
const helmet = require('helmet')
const articlesRoute = require('./routes/articles')

require('dotenv').config


//Middleware
app.use(express.json())
app.use(helmet())

const PORT = process.env.PORT || 3000

//ROUTES
app.use('/vimotiv/blog', articlesRoute)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})