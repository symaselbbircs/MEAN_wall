var lCtrl = function($scope, $location, $cookies){
  console.log('In logout controller')
  var logout = function(){
    console.log('logging out')
    $cookies.remove('first_name')
    $cookies.remove('last_name')
    $cookies.remove('email')
    $cookies.remove('loggedin')
    $location.path('/')
  }

  logout();
}


app.controller('logoutController', ['$scope', '$location','$cookies', lCtrl])
