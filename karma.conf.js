module.exports = function (config) {
    config.set({

        basePath: 'html/',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'kevin.module.js',
            'main.controller.js',
            'joke.controller.js',
            'joke.service.js',
            'main.controller.spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};