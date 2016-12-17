app.factory('messagesFactory', ['$http', function($http){

  function MessagesFactory(){

      this.index = function(callback){
        $http.get('/posts').then(function(response){
          if(typeof(callback) === "function"){
            callback(response.data)
          }
        })
      }

      this.create = function(message,email,callback){
        $http.post(`/posts/${email}`, message).then(function(response){
          if(typeof(callback) === "function"){
            callback(response.data)
          }
        })
      }
  }
  return new MessagesFactory();
}])
