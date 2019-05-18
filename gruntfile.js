module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            // options: {
            //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            // },
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
    grunt.registerTask('default', ['uglify', 'less']);
    grunt.registerTask('watch:less', ['less','watch']);


};