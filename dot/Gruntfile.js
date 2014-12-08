module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        plato: {
            static_analysis: {
              files: {
                'metrics': ['src/**/*.js', 'test/**/*.js']
              }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                unused: true,
                freeze: true,
                debug: true,
                maxdepth: 2,
                maxcomplexity: 3,
                browser: true
            },
            uses_defaults: ['src/**/*.js', 'test/**/*.js'],
        },
        jsdoc: {
            dist : {
                src: ['src/**/*.js'],
                dest: 'docs'
            }
        },
        watch: {
            configFiles: {
              options: {
                livereload: true
              },
              files: ['index.html', 'src/**/*.*', "resources/**/*.*", "test/**/*.*"],
              tasks: ['jssemicoloned', 'jshint', 'mocha', 'plato']
            }
        },
        jssemicoloned: {
            files: ['./src/**/*.js', './test/**/*.js']
        },
        mocha: {
          test: {
            src: ['test/**/*.js']
          }
        },
        concat: {
            options: {
                stripBanners: true,
                sourceMap: true,
                banner: '/* <%= pkg.name %> - jenius v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> - '+
                'website: www.jenius.io - email: mezzalab@gmail.com */' +
                'var jenius = jenius || {};' +
                '(function(){' +
                '',
                footer: '' +
                '}());'

            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/jenius.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jssemicoloned');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jssemicoloned', 'watch', 'jshint', 'mocha', 'plato']);
    grunt.registerTask('docs', ['jssemicoloned','jsdoc']);
    grunt.registerTask('publish', ['jssemicoloned', 'plato', 'concat']);
    grunt.registerTask('analysis', ['jssemicoloned','jshint', 'plato']);
    grunt.registerTask('tests', ['jssemicoloned', 'jshint', 'mocha']);

};
