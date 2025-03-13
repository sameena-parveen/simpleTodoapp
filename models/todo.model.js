const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});
const todomodel=mongoose.model("todo",todoSchema)
module.exports = todomodel
