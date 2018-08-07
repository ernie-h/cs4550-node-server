const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');
const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');



findAllSections = () =>
  sectionModel.find();


findSection = (sectionId) =>
  sectionModel.findById(sectionId);

findAllSectionsForCourse = courseId =>
  sectionModel.find({
    courseId: courseId
  });

enroll = (userId, sectionId) =>
  userModel.findUserById(userId)
  .then((user) => {
    user.sections.push(sectionId);
    user.save();
  })

createSection = section =>
  sectionModel.create(section);

deleteSection = (sectionId) =>
  sectionModel.deleteOne({
    _id: sectionId
  });

updateSectionEnroll = (sectionId) =>
  sectionModel.update({
    _id: sectionId
  }, {
    $inc: {
      seats: -1
    }
  });

module.exports = {
  enroll,
  findAllSections,
  findSection,
  findAllSectionsForCourse,
  findSectionsForStudent,
  createSection,
  deleteSection,
  updateSectionEnroll,
};
