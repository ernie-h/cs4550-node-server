const mongoose = require('mongoose');
const quizSchema = require('./quiz.schema.server');
const quizModel = mongoose.model('QuizModel', quizSchema);

const createQuiz = (quiz) =>
  quizModel.create(quiz);

const updateQuiz = (quizId, newQuiz) =>
  quizModel.update({
    _id: quizId
  }, {
    $set: newQuiz
  });

const deleteQuiz = (quizId) =>
  quizModel.remove({
    _id: quizId
  });

const findAllQuiz = () =>
  quizModel.find();

const findQuizById = (quizId) =>
  quizModel.findById(quizId)
  .populate('questions')
  .exec();

const addQuestion = (quizId, questionId) =>
  quizModel.update({
    _id: quizId
  }, {
    $push: {
      questions: questionId
    }
  });

module.exports = {
  createQuiz,
  deleteQuiz,
  updateQuiz,
  addQuestion,
  findAllQuiz,
  findQuizById,
};
