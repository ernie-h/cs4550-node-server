module.exports = app => {
  const sectionModel = require('../models/section/section.model.server');
  const enrollmentModel = require('../models/enrollment/enrollment.model.server');

  app.post('/api/student/:userId/section/:sectionId', (req, res) => {
    var enrollment = {
      student: req.params['userId'],
      section: req.params['sectionId']
    };
    enrollmentModel.enroll(enrollment)
      .then(response =>
        res.send(response));

  });

  app.delete('/api/student/:userId/section/:sectionId', (req, res) => {
    enrollmentModel.unenroll(req.params['userId'],req.params['sectionId'] )
      .then(response =>
        res.send(response));

  });

  app.put('/api/section/:sectionId', (req, res) => {
    sectionModel.updateSectionEnroll(req.params['sectionId'])
      .then(response =>
        res.send(response));
  });

  app.put('/api/section/:sectionId', (req, res) => {
    sectionModel.updateSectionUnenroll(req.params['sectionId'])
      .then(response =>
        res.send(response));
  });

  app.get('/api/student/:userId/section', (req, res) =>
    enrollmentModel.findSectionsForStudent(req.params['userId'])
    .then((response) => {
      res.send(response);
    })
  );

  app.get('/api/section', (req, res) =>
    sectionModel.findAllSections()
    .then(sections => res.send(sections))
  );

  app.get('/api/course/:courseId/section', (req, res) =>
    sectionModel.findAllSectionsForCourse(req.params['courseId'])
    .then(sections => res.send(sections))
  );

  app.post('/api/section', (req, res) =>
    sectionModel.createSection(req.body)
    .then(section => res.send(section))
  );

  app.delete('/api/section/:sectionId', (req, res) =>
    sectionModel.deleteSection(req.params['sectionId'])
    .then(response => res.send(response))
  );
};
