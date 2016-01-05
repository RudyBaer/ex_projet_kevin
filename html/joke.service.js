(function () {
    'use strict';

    angular
        .module('monapp')
        .factory('jokeService', JokeService);


    JokeService.$inject = ['$http', '$q'];
    function JokeService($http, $q) {

        var jokeService = {};
        jokeService.getJokes = function () {
            var defer = $q.defer();
            $http.get('api/joke')
                .success(function (data) {

                    defer.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    console.log(data);
                });
            return defer.promise;
        };

        jokeService.addJoke = function (joke) {
            var defer = $q.defer();
            console.log(joke);

            var j = {};
            j.txt = joke;
            j.date = new Date();
            $http.post('api/joke', j)
                .success(function (data) {
                    defer.resolve();
                }).
                error(function (data, status, headers, config) {
                    defer.reject()
                    console.log(data);
                });
            return defer.promise;
        }

        return jokeService;
    }
})
();