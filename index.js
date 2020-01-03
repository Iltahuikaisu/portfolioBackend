const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3001
const database = ``
const app = express()
app.use(bodyParser.json())

app.get(`/projects`, (req,res)=>{

    res.status(404).send('not found')
})



app.listen(port, ()=> {
    console.log(`server running ${port}`)
})