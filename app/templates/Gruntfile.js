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
        
        
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'build',
                    src: ['*']
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
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-rev');

    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        //'copy:dist',
        //'concurrent:dist',
        //'concat',
        'copy',
        //'cdnify',
        //'ngmin',
        //'cssmin',
        //'uglify'
       // 'rev:dist',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('deploy', ['build']);    
};