const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {name: 'string',
    details: 'string',
    state: 'string',
    keywords: 'string'
    })

const project = mongoose.model('Project', schema)

module.exports = project