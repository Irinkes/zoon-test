module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "build/main.min.js": "js/main.js"
                }
            }
        },
        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'build/main.min.js'
            }

        },
        watch: {
            styles: {
                files: ['style/**.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "build/main.css": "style/main.less"
                }
            }
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['babel', 'less']);
    grunt.registerTask('watch:less', ['less','watch']);


};