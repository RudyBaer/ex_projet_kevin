'use strict';

describe('main controller tests', function () {

    beforeEach(module('monapp'));

    var $controller;
    var mockedJokes = [{
        txt: 'msg'
    }];

    beforeEach(inject(function (_$controller_, jokeService) {
        $controller = _$controller_;
        spyOn(jokeService, 'getJokes').and.callFake(function () {
            return {
                then: function (callback) {
                    return callback(mockedJokes);
                }
            };
        });
    }));

    it('should create init name with "kevin"', function () {
        var ctrl = $controller('MainController', {});

        expect(ctrl.name).toBe("Kevin");
    });

    it('should load jokes', function() {
        var ctrl = $controller('MainController', {});

        expect(ctrl.jokes.length).toBe(1);
        expect(ctrl.jokes[0].txt).toBe('msg');

    })

});