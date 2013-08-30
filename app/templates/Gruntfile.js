module.exports = function (grunt) {
    
    'use strict';
    
    // load dependencies
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-aws');
    
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('aws-config.json'),
        
        /* clean directories */
        clean: ['build'],
        
        /* 
            prepare for minification 
            este comando configura as tasks cssmin e uglify
        */
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'build'
            }
        },
        
        /* html minification */
        htmlmin: {
            dist: {
                options: {
                    //deixar essa opcao desabilitada
                    //causa conflito com o ngmin
                    //removeComments: true
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['*.html', 'partials/{,*/}*.html'],
                    dest: 'build'
                }]
            }
        },
        
        /* image minification */
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/img',
                    src: '{,*/}*.{ico,png,jpg,jpeg,gif,webp,svg}',
                    dest: 'build/img'
                }]
            }
        },
        
        /* put files not handled in other tasks here */
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'build',
                    src: ['*.txt', '.htaccess', 'lib/{,*/}*.js']
                }]
            }
        },
        
        /* js file minification */
        uglify: {
            options: {
                preserveComments: false
            }
        },
        
        /* cache busting */
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            files: {
                src: [
                    'build/js/{,*/}*.js',
                    'build/lib/{,*/}*.js',
                    'build/css/{,*/}*.css',
                    'build/img/{,*/}*.{ico,png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        
        /* replace links to minificated files */
        usemin: {
            html: ['build/index.html'],
            options: {
                dirs: ['build']
            }
        },
        
        /* karma test runner */
        karma: {
            unit: {
                configFile: 'conf/karma.conf.js'
            }
        },
        
        // aws
        s3: {
            options: {
                accessKeyId: '<%= aws.accessKeyId %>',
                secretAccessKey: '<%= aws.secretAccessKey %>',
                bucket: '<%= aws.bucket %>',
                region: '<%= aws.region %>'
            },
            build: {
                cwd: "build/",
                src: "**"
            }
        }
    });
    
    // tasks
    grunt.registerTask('test', [
        'karma'
    ]);
    
    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        'htmlmin',
        'imagemin',
        'concat',
        'copy',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ]);
    
    grunt.registerTask('deploy', [
        'test',
        'build',
        's3'
    ]);
    
    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};