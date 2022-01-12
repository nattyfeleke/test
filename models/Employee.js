const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  birthDate: {
    type: Date,
  },
  gender: {
    type: String,
  },
  salary: {
    type: Number,
  },
});

module.exports = Emoployee = mongoose.model('emoployee', EmployeeSchema);
