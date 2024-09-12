angular.module('countryApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'main.html',
            controller: 'CountryController'
        })
        .when('/details/:code', {
            templateUrl: 'details.html',
            controller: 'DetailController'
        })
        .otherwise({
            redirectTo: '/'
        });
})
.controller('CountryController', function($scope, $http, $location) {
    $http.get('data.json').then(function(response) {
        $scope.countries = response.data;
    }, function(error) {
        console.error('Error fetching data:', error);
    });

    $scope.regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    $scope.viewCountry = function(countryCode) {
        console.log('Navigating to details for country code:', countryCode);
        $location.path('/details/' + countryCode);
    };
})
.controller('DetailController', function($scope, $routeParams) {
    const countryCode = $routeParams.code;
    
    $http.get('data.json').then(function(response) {
        const allCountries = response.data;
        $scope.country = allCountries.find(c => c.alpha3Code === countryCode) || {};

        if (!$scope.country.name) {
            console.error('Country not found:', countryCode);
        }
    }, function(error) {
        console.error('Error fetching data:', error);
    });
})
.filter('currencyList', function() {
    return function(currencies) {
        return currencies ? currencies.map(c => c.name).join(', ') : '';
    };
})
.filter('languageList', function() {
    return function(languages) {
        return languages ? languages.map(l => l.name).join(', ') : '';
    };
});
