app.controller('mycontroller',[
	'$scope',
	function($scope)
	{
     $scope.model={title:'Our menu'};

     $scope.changemaindish=function(item)
     {
     	$scope.model.maindish=item;
     }
	}
	]);