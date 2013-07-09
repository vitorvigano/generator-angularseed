module.exports = function (grunt) {
    
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        /* clean directories */
        clean: ['build'],
        
        /* prepare for minification */
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'build'
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
                    src: ['*.{ico,png,txt}','.htaccess']
                }]
            }
        },
        
        uglify: {
            options: {
                preserveComments: false
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
            html: ['build/index.html'],
            css: ['build/css/app.css'],
            options: {
                dirs: ['build']
            }
        },
        
        htmlmin: {
            dist: {
                options: {
                  /*removeCommentsFromCDATA: true,
                  // https://github.com/yeoman/grunt-usemin/issues/44
                  //collapseWhitespace: true,
                  collapseBooleanAttributes: true,
                  removeAttributeQuotes: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['*.html', 'partials/*.html'],
                    dest: 'build'
                }]
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'build/img'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        'htmlmin',
        'imagemin',
        'concat',
        'copy',
        //'cdnify',
        //'ngmin',
        'cssmin',
        'uglify',
       // 'rev:dist',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('deploy', ['build']);
};