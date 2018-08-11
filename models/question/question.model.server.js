const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const questionModel = mongoose.model('QuestionModel', questionSchema);

createQuestion = (question) =>
  questionModel.create(question);

updateQuestion = (questionId, newQuestion) =>
  questionModel.update({
    _id: questionId
  }, {
    $set: newQuestion
  })


deleteQuestion = (questionId) =>
  questionModel.remove({
    _id: questionId
  })

findAllQuestions = () =>
  questionModel.find()

findQuestionById = (questionId) =>
  questionModel.findById(questionId)

// addQuestion = (quizId, questionId) =>
//   questionModel.update({
//     _id: questionId
//   }, {
//     $push: {
//       questions: questionId
//     }
//   })

module.exports = {
  createQuestion,
  deleteQuestion,
  updateQuestion,
  findAllQuestions,
  findQuestionById,
}
