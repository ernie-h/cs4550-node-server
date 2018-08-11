module.exports = app => {
  const questionModel = require('../models/question/question.model.server')
  app.get('/api/question', (req, res) => {
    questionModel.findAllQuestions()
    .then(questions => res.send(questions))
  })
  app.get('/api/question/:questionId', (req, res) => {
    questionModel.findQuestionById(req.params['questionId'])
    .then(question => res.send(question))
  })

  app.post('/api/question', (req, res) => {
    questionModel.createQuestion(req.body)
    .then(question => res.send(question))
  })
  app.delete('/api/question/:questionId', (req, res) => {
    questionModel.deleteQuestion(req.params['questionId'])
      .then(status => res.send(status))

  })
  app.put('/api/question/:questionId', (req, res) => {
    questionModel.updateQuestion(req.params['questionId'], req.body)
      .then(question => res.send(question))
  })
}
