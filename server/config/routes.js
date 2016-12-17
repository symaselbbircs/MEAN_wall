var mongoose = require('mongoose');
    User = mongoose.model('User'),
    users = require('./../controllers/users'),
    posts = require('./../controllers/posts'),
    comments = require('./../controllers/comments')


// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){

  //ROUTES FOR USERS CONTROLLER
  app.get('/users', function(req,res){
    users.index(req,res);
  })
  app.post('/users/:email', function(req,res){
    users.show(req,res);
  })
  app.post('/users', function(req,res){
    users.create(req,res)
  })

  //ROUTES FOR POSTS CONTROLLER
  app.get('/posts', function(req,res){
    posts.index(req,res)
  })
  app.post('/posts/:email', function(req,res){
    posts.create(req,res)
  })

  //ROUTES FOR COMMENTS CONTROLLER
  app.post('/comments/:mid', function(req,res){
    comments.create(req,res)
  })
}
console.log('Routes loaded!');
