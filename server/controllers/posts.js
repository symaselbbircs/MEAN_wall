var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    User = mongoose.model('User');

  module.exports = {
    index: function(req,res){
      Post.find({})
      .populate('comments')
      .exec(function(err, post) {
         console.log('Getting all messages!')
         res.json(post);
       });
    },
    create: function(req,res){
      User.findOne({email: req.params.email}, function(err,user){
        var post = new Post(req.body);
        post._user = user._id;
        post.name = user.first_name + " " + user.last_name;
        post.save(function(err){
          if(err){
            res.status(400)
            res.json(err)
          } else{
            console.log("yay we are going to post a message!")
            res.status(200);
            res.json(true)
          }
        })
      })
    }
  }
