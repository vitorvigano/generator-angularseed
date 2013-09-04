// Karma configuration
// Generated on Thu Aug 29 2013 22:13:18 GMT-0300 (Hora oficial do Brasil)

module.exports = function (config) {
    'use strict';
    
    config.set({
        
        // base path, that will be used to resolve files and exclude
        basePath: '../',
        
        // frameworks to use
        frameworks: ['ng-scenario'],
        
        
        // list of files / patterns to load in the browser
        files: [
            'test/e2e/**/*.js',
            'test/e2e/*.js'
        ],
        
        
        // list of files to exclude
        exclude: [
            
        ],
        
        
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],
        
        
        // web server port
        port: 9877,
        
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        
        
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        
        
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        
        
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        
        
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        
        
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
        
        // Uncomment the following lines if you are using grunt's server to run the tests
        //proxies: {
        //    '/': 'http://localhost:9000/'
       // },
        // URL root prevent conflicts with the site root
        //urlRoot: '_karma_'
    });
};