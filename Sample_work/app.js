// create  angular app and inject ngAnimate, bootstrap and ui-router 
angular.module('formApp', ['ngAnimate','ui.bootstrap', 'ui.router'])

// configuring  routes 
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show  basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections has their own view
        .state('form.stepone', {
            url: '/stepone',
            templateUrl: 'stepone.html'
        })
        
        .state('form.steptwo', {
            url: '/steptwo',
            templateUrl: 'steptwo.html'
        })
        
        .state('form.stepthree', {
            url: '/stepthree',
            templateUrl: 'stepthree.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/stepone');
})


.controller('DatepickerDemoCtrl', function ($scope) {
	$scope.today = function() {
		$scope.formData.startDate = new Date();
		$scope.formData.returnDate = new Date();
	};
	$scope.today();

	$scope.clear = function () {
		$scope.formData.startDate = null;
		$scope.formData.returnDate = null;
	};
			
	$scope.calendar = {
			opened: {},
			dateFormat: 'MM/dd/yyyy',
			dateOptions: {},
			open: function($event, which) {
			$event.preventDefault();
				$event.stopPropagation();
				$scope.calendar.opened[which] = true;
			} 

	};
	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	$scope.toggleMin();
	$scope.maxDate = new Date(2020, 5, 22);

	$scope.open = function($event) {
		$scope.status.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	$scope.status = {
		opened: false
	};

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	$scope.events =
	[
	{
		date: tomorrow,
		status: 'full'
	},
	{
		date: afterTomorrow,
		status: 'partially'
	}
	];
	

	$scope.getDayClass = function(date, mode) {
	if (mode === 'day') {
			var dayToCheck = new Date(date).setHours(0,0,0,0);

		for (var i=0;i<$scope.events.length;i++){
			var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		if (dayToCheck === currentDay) {
			return $scope.events[i].status;
		}
		}
	}
	
	return '';
	};
	
					 
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});


