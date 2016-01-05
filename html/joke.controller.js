(function() {
    'use strict';

    angular
        .module('monapp')
        .controller('JokeController', JokeController);

    JokeController.$inject = [ '$http'];
    function JokeController($http) {
        var vm = this;
        vm.addFavorite = addFavorite;
        vm.removeFavorite = removeFavorite;
        vm.plusOne = plusOne;


        function plusOne(joke) {

            if (joke.score == undefined) {
                joke.score = 0;

            }
            joke.score += 1;
            updateJoke(joke);
        }


        function removeFavorite(joke) {
            joke.favorite = false;
            updateJoke(joke);
        }


        function addFavorite(joke) {
            joke.favorite = true;
            updateJoke(joke);
        }

        function updateJoke(joke) {
            $http.put('api/joke', joke)
                .success(function (data) {

                }).
                error(function (data, status, headers, config) {
                    console.log(data);
                });
        }

    }
})();