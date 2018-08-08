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

updateUser = (newUser) =>
  userModel.update({
    _id: newUser._id
  }, {
    $set: {
      username: newUser.username,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
      dateOfBirth: newUser.dateOfBirth
    }
  });

module.exports = {
  findUserById,
  findAllUsers,
  findUserByCredentials,
  findUserByUsername,
  createUser,
  updateUser
};
