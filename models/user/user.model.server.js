const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);

findAllUsers = () =>
  userModel.find();

findUserByCredentials = (username, password) =>
  userModel.findOne({
    username: username,
    password: password
  });

findUserByUsername = (username) =>
  userModel.findOne({
    username: username,
  });

findUserById = userId =>
  userModel.findById(userId)

createUser = (user) =>
  userModel.create(user);


module.exports = {
  findSectionsForStudent,
  findUserById,
  findAllUsers,
  findUserByCredentials,
  findUserByUsername,
  createUser
};
