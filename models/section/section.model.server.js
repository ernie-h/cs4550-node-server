const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');



findAllSections = () =>
  sectionModel.find();

findAllSectionsForCourse = courseId =>
  sectionModel.find({
    courseId: courseId
  });

enroll = (userId, sectionId) =>
  userModel.findUserById(userId)
  .then(user => {
    user.sections.push(sectionId);
    return user.save();
  })
createSection = section =>
  sectionModel.create(section);

deleteSection = (sectionId) =>
  sectionModel.deleteOne({_id:  sectionId});

module.exports = {
  enroll,
  findAllSections,
  findAllSectionsForCourse,
  createSection,
  deleteSection,
};
