const express = require('express')
const app = express()
const { port } = require('./config')
const apiRoutes = require('./routes/api')


// routes for api
// app.use('/', apiRoutes)
// routes for api

// Server listen for requests
app.listen(port, function() {
    console.log('Serwer słucha... http://localhost:' + port)
})
// Server listens for requests
