module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['stylesheets/**/*.scss'],
        dest: 'stylesheets/main.scss'
      }
    },
    uglify: {
      dist: {
        src: ['js/dest/script.main.js'],
        dest: 'js/dest/script.main.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'stylesheets',
          src: ['main.scss'],
          dest: 'stylesheets',
          ext: '.css'
        }]
      },
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass'],
        // tasks: ['concat', 'sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};
