app.factory('commentsFactory', ['$http', function($http){

  function CommentsFactory(){
      // this.index = function(callback){
      //
      // }
      //
      // this.show = function(){
      //
      // }

      this.create = function(comment,mid,callback){
        $http.post(`/comments/${mid}`, comment).then(function(response){
          if(typeof(callback) === "function"){
            callback(response)
          }
        })
      }
  }
  return new CommentsFactory();
}])
