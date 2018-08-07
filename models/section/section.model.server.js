const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');
const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');

updateSectionEnroll = (sectionId) =>
sectionModel.update({
  _id: sectionId
}, {
  $inc: {
    seats: -1
  }
});

updateSectionUnenroll = (sectionId) =>
sectionModel.update({
  _id: sectionId
}, {
  $inc: {
    seats: 1
  }
});

findAllSections = () =>
  sectionModel.find();


findSection = (sectionId) =>
  sectionModel.findById(sectionId);

findAllSectionsForCourse = courseId =>
  sectionModel.find({
    courseId: courseId
  });

createSection = section =>
  sectionModel.create(section);

deleteSection = (sectionId) =>
  sectionModel.deleteOne({
    _id: sectionId
  });


module.exports = {
  updateSectionEnroll,
  updateSectionUnenroll,
  findAllSections,
  findSection,
  findAllSectionsForCourse,
  createSection,
  deleteSection,
};
