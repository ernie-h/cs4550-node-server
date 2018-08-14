const mongoose = require('mongoose');
const submissionSchema = require('./submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

const submitQuiz = submission =>
    submissionModel.create(submission);

const findAllSubmissions = () =>
    submissionModel.find();

const findAllSubmissionsForStudent = studentId =>
    submissionModel.find({
        student: studentId
    });

const findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({
        quiz: quizId
    });

module.exports = {
    submitQuiz,
    findAllSubmissions,
    findAllSubmissionsForStudent,
    findAllSubmissionsForQuiz
};