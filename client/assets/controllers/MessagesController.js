var mCtrl = function($scope, $location, messagesFactory, commentsFactory, $cookies){
  if(!$cookies.get('loggedin')){
    $scope.err = "Please log in to continue"
    $scope.login = false
    $location.path('/')
  } else{
    $scope.login = {first_name:$cookies.get('first_name'), last_name:$cookies.get('last_name'), email:$cookies.get('email')}
  }

  function index(){
    messagesFactory.index(function(response){
      $scope.messages = response
    })
  }

  index();

  this.submitM = function(message){
    messagesFactory.create(message,$cookies.get('email'), function(res){
      if(res){
        index();
      }
    })
  }

  this.submitC = function(message_id,comment){
    comment.email = $cookies.get('email')
    commentsFactory.create(comment,message_id, function(res){
      if(res){
        index();
      }
    })
    console.log("oh hey tried to submit a comment!")
  }

}

app.controller('messagesController', ['$scope', '$location', 'messagesFactory','commentsFactory', '$cookies', mCtrl])
