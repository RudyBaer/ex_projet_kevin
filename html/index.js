var app = angular.module("monapp", ['LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('yourAppName')
        .setStorageType('sessionStorage');
});

app.run(function(localStorageService){
    localStorageService.set("truc", "machin");

});

app.controller("main", function ($scope) {
        $scope.name = "Kevin";
        $scope.jokes= [];

        $scope.addJoke = function (joke) {
            console.log(joke);
            $scope.joke = "";

            var j = {};
            j.txt = joke;
            j.date = new Date();
            $scope.jokes.push(j);
            $scope.joke = "";
        }

    }
);