module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/img'
                }]
            }
        },

        sass: {
            dist: {
                files: {
                    'scss/main.css': 'scss/main.scss'
                }
            }
        },

        cssnano: {
            options: {
                sourcemap: false
            },
            dist: {
                files: {
                    'build/css/style.min.css': 'scss/main.css'
                }
            }
        },

        postcss: {
            options: {
              map: false,
         
              processors: [
                require('autoprefixer')
              ]
            },
            dist: {
              src: 'build/css/style.min.css'
            }
        },

        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "js",
                    "src": ["*.js"],
                    "dest": "js/js-compiled/",
                    "ext": "-compiled.js"
                }]
            }
        },

        uglify: {
            my_target: {
                files: {
                    'build/js/script.min.js': ['js/js-compiled/*.js']
                }
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['css'],
            },
            js: {
                files: ['js/*.js'],
                tasks: ['js'],
            },
            img: {
                files: ['img/*.{png,jpg,gif,svg}'],
                tasks: ['img'],
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-babel');

    // register tasks
    grunt.registerTask('css', ['sass', 'postcss', 'cssnano']);
    grunt.registerTask('js', ['babel', 'uglify']);
    grunt.registerTask('img', ['image']);
    grunt.registerTask('start', ['sass', 'cssnano', 'watch']);
    grunt.registerTask('default', ['sass', 'cssnano', 'postcss', 'babel', 'uglify', 'watch']);
};