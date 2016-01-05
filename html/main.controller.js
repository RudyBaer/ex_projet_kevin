(function() {
    'use strict';

    angular
        .module('monapp')
        .controller('MainController', MainController);

    MainController.$inject = ['jokeService'];
    function MainController(jokeService) {
        var vm = this;
        vm.name = "Kevin";
        vm.jokes= [];
        vm.addJoke = addJoke;
        vm.predicate = '';
        vm.reverse = false;
        vm.order = order;

        activate();

        function activate() {
            jokeService.getJokes().then(function (data) {
                vm.jokes = data;
            });
        }


        function order(order) {
            vm.predicate = order;
            vm.reverse = !vm.reverse;
        }


        function addJoke(joke) {
            jokeService.addJoke(joke).then(function () {
                var j = {};
                j.txt = joke;
                j.date = new Date();
                vm.jokes.push(j);
                vm.joke = "";
            })
        };

    }

})();
