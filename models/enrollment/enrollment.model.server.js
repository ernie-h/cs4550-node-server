var mongoose = require('mongoose');
var enrollmentSchema = require('./enrollment.schema.server');
var enrollmentModel = mongoose.model(
  'EnrollmentModel',
  enrollmentSchema
);

enroll = (enrollment) =>
  enrollmentModel.create(enrollment);

unenroll = (userId, sectionId) =>
enrollmentModel.deleteOne({
  section: sectionId,
  student: userId,
})

findSectionsForStudent = (studentId) => {
  return enrollmentModel
    .find({
      student: studentId
    })
    .populate('section')
    .exec();
}

module.exports = {
  enroll,
  unenroll,
  findSectionsForStudent,
};
