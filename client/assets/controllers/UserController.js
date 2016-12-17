var uCtrl = function($scope, $location, usersFactory, $cookies){

  //TODO bug won't let user's register unless they are logged in. Solution is to create a registerController
  if($cookies.get('loggedin')){
      $scope.login = {first_name:$cookies.get('first_name'), last_name:$cookies.get('last_name'), email:$cookies.get('email')}
      $location.path('/messages')
  } else{
    $scope.err = "Please log in to continue"
    $scope.login = false
    // $location.path('/')
  }
  var index = function(){
    usersFactory.index(function(all_users){
      console.log("available user emails written below")
      console.log(all_users)
    })
  }
  index();

  var ErrHandler = function(res,path){
    if(res.err){
      $scope.error = res.err
    } else{
      $location.path('/')
      }
  }
  this.addUser = function(user){
    console.log("adding user")
    if(user.password === user.password_confirm){
      usersFactory.create(user,function(res){ErrHandler(res,'/')})
    } else{
      $scope.error = "Passwords do not match!"
    }
  }

  this.login = function(user){
    console.log("User login Controller")
    usersFactory.login(user, function(res){
    ErrHandler(res,'/')
    if(res._id){
      $cookies.put('first_name', res.first_name)
      $cookies.put('last_name',res.last_name)
      $cookies.put('email', res.email)
      $cookies.put('loggedin', true)
      $scope.login = {first_name:$cookies.get('first_name'), last_name:$cookies.get('last_name'), email:$cookies.get('email')}
      $scope.error = false
      $location.path('/messages')
    }
    })
  }
}

app.controller('userController', ['$scope', '$location', 'usersFactory', '$cookies', uCtrl])
