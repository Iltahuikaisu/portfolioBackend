const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const projectModel = require('./project')
const feedbackModel = require('./feedback')
const dotenv = require('dotenv').config()
const port = process.env.PORT||3001
const database = `mongodb+srv://user:${process.env.PASSWORD}@phonebookpart3-u5htv.mongodb.net/portfolio?retryWrites=true&w=majority`
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

app.post('/feedback', (req, res)=> {
    mongoose.connect(database, {useNewUrlParser:true},{ useUnifiedTopology: true })
    console.log(req.body)
    const newFeedback = new feedbackModel({
        name:req.body.name,
        feedback:req.body.feedback})

    newFeedback.save().then((value)=> {
        mongoose.disconnect()
        res.send(value)
    })
})

app.get(`/projects`, (req,res)=>{
    mongoose.connect(database, {useNewUrlParser:true},{ useUnifiedTopology: true })
    projectModel.find().then((value)=>{
        console.log(value)
        res.json(value)
    })
})

app.post(`/projects`, (req,res)=>{
    mongoose.connect(database,{useNewUrlParser:true},{ useUnifiedTopology: true })
    const newProject = new projectModel(
        {name: req.body.name,
        details: req.body.details,
        state: req.body.state,
        keywords: req.body.keywords        
    })

    newProject.save().then((value) => {
        mongoose.disconnect()
        res.send(value)
    })
})

app.delete('/projects/:id', (req,res)=>{
    mongoose.connect(database,{useNewUrlParser:true},{ useUnifiedTopology: true })
    projectModel.findByIdAndDelete(req.params.id).then((value)=>{
        mongoose.disconnect()
        console.log(value)
        res.status(201).send(`${req.params.id} deleted`)
    })
})

app.post('/feedback', (req, res)=>{
    mongoose.connect(database,{useNewUrlParser:true},{ useUnifiedTopology: true })
    const newMessage = new feedbackModel(
        req.body
        )

    console.log(req.body)

    newMessage.save().then((value) => {
        mongoose.disconnect()
        res.send(value)
    })
})


app.listen(port, ()=> {
    console.log(`server running ${port}`)
})