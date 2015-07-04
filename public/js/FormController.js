var FormController = angular.module('form.controller',[]);

FormController.controller('InputController', function($scope, $http, Users) {
     formData = {};
    $scope.createUser = function() {
        if ($scope.formData != undefined) {
            Users.create($scope.formData)
            .success(function(data) {
                $scope.users = data;
                $scope.formData = {};
                $scope.myForm.$setPristine(true);
            });        
        }
    };
});
