'use strict';

describe('controller tests', function () {

    beforeEach(module('monapp'));

    var $controller, $httpBackend;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should create init name with "kevin"', function () {
        var $scope = {};
        var ctrl = $controller('main', {$scope: $scope, $httpBackend: $httpBackend});

        expect($scope.name).toBe("Kevin");
    });

});