app.controller("UsersController",['$scope','$http', function($scope,$http){
	 $scope.hello = "hello world"
   $scope.users = []
   $scope.template = {}
   $scope.user_check = "normal"

 
   // show all users----------------
   // $scope.show = function(){
    $http({method: 'GET', url: '/api/v1/users'}).
          success(function(data, status, headers, config) {
            $scope.users = data
            $scope.template = { name: "form1", url: "user.html"} 
          });

   $scope.Selected_user = function(value){
      // alert(value);
      $scope.template = { name: "form1", url: "loader.html"} 
      if (value == "normal"){
        $http({method: 'GET', url: '/api/v1/users'}).
          success(function(data, status, headers, config) {
            $scope.template = { name: "form1", url: "user.html"} 
            $scope.users = data
          });
      }
      if (value == "twitter"){
        $http({method: 'GET', url: '/api/v1/users/twitter_user'}).
          success(function(data, status, headers, config) {
            $scope.template = { name: "form1", url: "twitter_user.html"} 
            $scope.users = data
          });
      }
   }

   
    //  error(function(data, status, headers, config) {
    //      alert("fail")
    // });
   // }


   // delete user ------------------
   $scope.deleteUser = function(id){
    $http({method: 'DELETE', url: '/api/v1/users/'+ id}).
    success(function(data, status, headers, config) {
         alert ("user deleted successfully")
         $scope.users = data

     }).
     error(function(data, status, headers, config) {
         alert("fail")
    });
   }

   
   // add new user template----------

   $scope.addNew = function(){

     $scope.user = {}
     $scope.template = { name: "form", url: "userform.html"} 
   }
   

  // create new user ---------------------
  $scope.errors = []
   $scope.submit = function(){
      formData = JSON.stringify($scope.user)
      $http({method:'POST', url: '/api/v1/users', data: formData}).
      success(function(data, status, headers,config) {
         $scope.users = data
         alert("User Created successfully")
         $scope.hidefields();
                  
     }).
     error(function(data, status, headers,config) {
         // alert(data)
         $scope.errors = data
         
    });
    // $scope.user = { }
   }

	$scope.hidefields = function(){
    $scope.template = { } 
    $scope.errors = { }
   }

   // edit user ---------------------
   $scope.user = {}
   $scope.editUser = function(id){
    $http({method: 'GET', url: '/api/v1/users/'+ id+'/edit'}).
    success(function(data, status, headers, config) {
         $scope.user = data
         $scope.template = { name: "form1", url: "edituser.html"} 

     }).
     error(function(data, status, headers, config) {
         alert("fail")
    });
   }

   //update user--------------------------
   $scope.updateUser = function(id){
    
    formData = JSON.stringify($scope.user)
    $http({method: 'PUT', url: '/api/v1/users/'+id, data: formData}).
    success(function(data, status, headers, config) {
          alert ("User updated successfully")
          $scope.users = data
          $scope.hidefields();
     }).
     error(function(data, status, headers, config) {
         alert("fail")
    });
   }

}]);
