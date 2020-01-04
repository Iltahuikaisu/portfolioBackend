const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {name: 'string',
    feedback: 'string'
    }
)

const feedback = mongoose.model('Message', schema)

module.exports = feedback