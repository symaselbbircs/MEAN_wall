var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    User = mongoose.model("User");

function UserController(){

  this.index = function(req,res){
    User.find({}, function(err,users){
      if(err){
        res.json(err)
      } else{
        res.json(users)
      }
    })
  };

  this.show = function(req,res){
    User.findOne({email:req.params.email}, function(err,user){
      if(err){
        res.json(err)
      } else{
        if(bcrypt.compareSync(req.body.password, user.password)){
          res.json(user)
        } else {
          res.json({"err": "Password invalid"})
        }

      }
    })
  };

  this.create = function(req,res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
    var user = new User(req.body)
    user.save(function(err){
      if(err){
        res.json(err)
      } else{
        res.json({response: "User Saved!"})
      }
    })
  }
}


module.exports = new UserController();
