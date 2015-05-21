angular.module('controllers', [])

.controller('MyController', function($scope){

	$scope.tasks = [
		{id: 1, name: 'Pick up Groceries', deadline: 'Friday', user: 'Roger Smith'},
		{id: 2, name: 'Wash Car', deadline: 'Saturday', user: 'Roger Smith'},
		{id: 3, name: 'Take Out Garbage', deadline: 'Sunday', user: 'Roger Smith'}
	];
})

.controller('MyDetailController', function($scope, $stateParams){

	$scope.tasks = [
		{id: 1, name: 'Pick up Groceries', deadline: 'Friday', user: 'Roger Smith'},
		{id: 2, name: 'Wash Car', deadline: 'Saturday', user: 'Roger Smith'},
		{id: 3, name: 'Take Out Garbage', deadline: 'Sunday', user: 'Roger Smith'}
	];

	$scope.task = $scope.tasks[$stateParams.id - 1];

});