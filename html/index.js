var app = angular.module("monapp", ['LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('yourAppName')
        .setStorageType('sessionStorage');
});

app.run(function(localStorageService){
    localStorageService.set("truc", "machin");

});