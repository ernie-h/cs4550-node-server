module.exports = app => {
  const quizModel = require('../models/quiz/quiz.model.server')

  app.get('/api/quiz/:quizId', (req, res) => {
    quizModel.findQuizById(req.params['quizId'])
    .then(quiz => res.send(quiz))
  })
  app.get('/api/quiz', (req, res) => {
    quizModel.findAllQuiz()
    .then(quizzes => res.send(quizzes))
  })
  app.post('/api/quiz', (req, res) => {
    quizModel.createQuiz(req.body)
    .then(quiz => res.send(quiz))
  })
  app.delete('/api/quiz/:quizId', (req, res) => {
    quizModel.deleteQuiz(req.params['quizId'])
      .then(status => res.send(status))

  })
  app.put('/api/quiz/:quizId', (req, res) => {
    quizModel.updateQuiz(req.params['quizId'], req.body)
      .then(quiz => res.send(quiz))
  })

  app.put('/api/quiz/:quizId/question/:questionId', (req, res) => {
    quizModel.addQuestion(req.params['quizId'],req.params['questionId'])
      .then(quiz => res.send(quiz))
  })
}
