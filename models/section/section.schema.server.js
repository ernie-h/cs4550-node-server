const mongoose = require('mongoose');
module.exports = mongoose.Schema({
  title: String,
  courseId: Number,
  seats: Number,
  students: [String],
}, {collection: 'section'});
