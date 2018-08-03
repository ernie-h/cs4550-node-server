var express = require('express')
var app = express()

var session = require('express-session');

var session = require('express-session');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));

function setSession(req, res) {
 var name = req.params['name'];
 var value = req.params['value'];
 req.session[name] = value;
 res.send(req.session);
}

function getSession(req, res) {
 var name = req.params['name'];
 var value = req.session[name];
 res.send(value);
}

function getSessionAll(req, res) {
 res.send(req.session);
}

function resetSession(req, res) {
 req.session.destroy();
 res.send(200);
}

// // app.get('/api/session/set/:name/:value', setSession);
// // app.get('/api/session/get/:name', getSession);
// //
// // // setSession = (req, res) => {
// // //   res.send('hello from set')
// // // }
// // //
// // // getSession = (req, res) => {
// // //   res.send('get');
// // // }
//
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/cs4550-summer-2');
//
// var userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   firstName: String,
//   lastName: String,
// }, {collection: user});
//
// var userModel = mongoose.model('UserModel', userSchema);
//
// app.get('/api/user', findAllUsers);
//
//   function findAllUsers(req, res){
//     userModel.find()
//     .then(function(users) {
//       res.send(users);
//     })
//   }

app.get('/api/session/set/:name/:value',
  setSession);
app.get('/api/session/get/:name',
  getSession);
app.get('/api/session/get',
  getSessionAll);
app.get('/api/session/reset',
  resetSession);

app.get('/hello', function(req, res) {
  res.send({
    hello: 'hello'
  })
})

app.listen(3000)
