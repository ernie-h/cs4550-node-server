module.exports = app => {
  const sectionModel = require('../models/section/section.model.server');


  app.get('/api/section', (req, res) =>
    sectionModel.findAllSections()
      .then(sections => res.send(sections))
  );

  app.get('/api/course/:courseId/section', (req, res) =>
    sectionModel.findAllSectionsForCourse(req.params['courseId'])
      .then(sections => res.send(sections))
  );
  app.put('/api/student/:userId/section/:sectionId', (req, res) => {
    sectionModel.enroll(req.params['userId'], req.params['sectionId'])
    .then(response =>
      res.send(response))

  });
  app.put('/api/section/:sectionId', (req, res) => {
    sectionModel.updateSectionEnroll(req.params['sectionId'])
    .then(response =>
      res.send(response));

  });
  // sectionModel
  // .decrementSectionSeats(sectionId)
  // .then(function () {
  //   return enrollmentModel
  //     .enrollStudentInSection(enrollment)
  // })
  // .then(function (enrollment) {
  //   res.json(enrollment);
  // }))

  app.post('/api/section', (req, res) =>
    sectionModel.createSection(req.body)
      .then(section => res.send(section))
  );

  app.delete('/api/section/:sectionId', (req, res) =>
    sectionModel.deleteSection(req.params['sectionId'])
      .then(response => res.send(response))
  );
};
