module.exports = (app) => {
  var userModel = require('../models/user/user.model.server');

  function register(req, res) {
    var username = req.body.username;
    userModel.findUserByUsername(username)
    .then((user) => {
        if (!user) {
          return userModel
            .createUser(req.body);
        } else {
          return res.sendStatus(404);
        }
      })
      .then((user) => {
        req.session['currentUser'] = user;
        res.sendStatus(200);
      });
  }


  function login(req, res) {
    const user = req.body;
    userModel.findUserByCredentials(user.username, user.password)
      .then((user) => {
        if (user) {
          req.session['currentUser'] = user;
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      });
  }

  function profile(req, res) {
    res.send(req.session['currentUser']);
  }

  function logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  }


  function findAllUsers(req, res) {
    userModel.findAllUsers()
      .then(users => {
        res.send(users);
      });
  }

  function currentUser(req, res) {
    const currentUser = req.session['currentUser'];
    if (currentUser) {
      userModel.findUserById(currentUser._id)
        .then(user =>{
          res.send(user);
        });
    } else {
      res.sendStatus(403);
    }
  }

    function updateUser(req, res) {
      userModel.updateUser(req.body)
      .then(user => {
        res.send(user);
      });
    }
  app.put('/api/profile', updateUser);
  app.get('/api/profile', currentUser);
  app.get('/api/user', findAllUsers);
  app.post('/api/login', login);
  app.post('/api/register', register);
  app.post('/api/logout', logout);
  app.get('/api/profile', profile);

};
