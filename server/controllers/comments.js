var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment'),
    User = mongoose.model('User'),
    Post = mongoose.model('Post');

  module.exports = {
    create: function(req, res){
      Post.findOne({_id: req.params.mid}, function(err, post){
             User.findOne({email:req.body.email}, function(err,user){
               var comment = new Comment(req.body);
               comment._post = post._id;
               comment.name = user.first_name + " " + user.last_name
               post.comments.push(comment);
               comment.save(function(err){
                       post.save(function(err){
                             if(err) { console.log("Error Saving comment"); res.render('error', {err:err}) }
                             else {
                               console.log("Successfully Saved Comment!");
                               res.redirect('/posts')
                             }
                       });
               });
             })
       });
    }
  }
