module.exports = function (grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist']
        },
        useminPrepare: {
            html: 'app/index.html',
            css: 'app/css/app.css'
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'dist',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'bower_components/**/*',
                        'img/{,*/}*.{gif,webp,svg,jpg,png}',
                        'styles/fonts/*',
                        'lib/{,*/}*.*'
                    ]
                }]
            }
        },
        uglify: {
            dist: {
                src: 'app/js/*.js',
                dest: 'dist/app.min.js',
                options: {
                    preserveComments: false
                }
            }
        },
        rev: {
            dist: {
                options: {
                    encoding: 'utf8',
                    algorithm: 'md5',
                    length: 8
                },
                files: {
                    src: [
                        'dist/js/{,*/}*.js',
                        'dist/css/{,*/}*.css',
                        'dist/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
                }
            }
        },
        usemin: {
            html: ['dist/{,*/}*.html'],
            css: ['dist/css/{,*/}*.css'],
            options: {
                dirs: ['dist']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-rev');

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'copy:dist',
        //'concurrent:dist',
        //'concat',
        //'copy',
        //'cdnify',
        //'ngmin',
        //'cssmin',
        'uglify:dist',
        'rev:dist',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
};