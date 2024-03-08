require ('dotenv').config( )
const express = require('express')
const app = express()
const port = 3001
const postsRoutes = require ('./src/routes/posts')
const userRoutes = require ('./src/routes/users')
const mongoDB = require('./src/db/db')
const { mongo } = require('mongoose')

app.use(express.json())

app.use('/posts', postsRoutes)

app.use('/users', userRoutes)

mongoDB.connect.then((message)=>{
    console.log(message)
    app.listen(port, ()=>{
        console.log(`Serving reading in port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})