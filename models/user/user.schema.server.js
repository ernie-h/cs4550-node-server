const mongoose = require('mongoose');
module.exports = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateOfBirth: String,
  role: String,
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'SectionModel'}]
}, {collection: 'user'});
