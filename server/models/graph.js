const {Schema, model} = require('mongoose')

const graphSchema = new Schema({
  nodes: [
    {
      "_id": false,
      id: {
        type: String,
        required: true
      }
    }
  ],
  links: [
    {
      "_id": false,
      sid: {
        type: String,
        required: true
      },
      tid: {
        type: String,
        required: true
      },
      value: {
        type: Number
      }
    }
  ]
})

module.exports = model('Graph', graphSchema)