const mongoose = require('mongoose');
module.exports = mongoose.Schema({
  title: String,
  courseId: Number,
}, {collection: 'section'});
