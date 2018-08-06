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
  app.put('/api/section/:sectionId/enroll', (req, res) => {
    const currentUser = req.session['currentUser'];
    sectionModel.enroll(currentUser._id, req.params['sectionId'])
    .then(status => res.sendStatus(status));
  });

  app.post('/api/section', (req, res) =>
    sectionModel.createSection(req.body)
      .then(section => res.send(section))
  );

  app.delete('/api/section/:sectionId', (req, res) =>
    sectionModel.deleteSection(req.params['sectionId'])
      .then(response => res.send(response))
  );
};
