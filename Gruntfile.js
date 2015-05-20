module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  var pushState = require('connect-pushstate');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          optimization: 2
        },
        files: {
          "app/assets/stylesheets/base.css": "app/assets/less/base.less",
          "app/assets/stylesheets/custom.css": "app/assets/less/custom.less"
        }
      }
    },
    sass: {
      development: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: {
          "app/assets/stylesheets/sbase.css": "app/assets/sass/base.scss",
          "app/assets/stylesheets/scustom.css": "app/assets/sass/custom.scss"
        }
      }
    },
    watch: {
      html: {
        files: ['app/index.html', 'app/views/**/*.html', 'app/assets/stylesheets/*.css'],
        options: {
          livereload: true,
          nospawn: true
        }
      },
      less: {
        files: ['app/assets/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          livereload: true,
          nospawn: true
        }
      },
      sass: {
        files: ['app/assets/sass/**/*.scss'], // which files to watch
        tasks: ['sass'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          middleware: function(connect, options) {
            return [
              pushState(),
              connect.static(options.base[0]),
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'less', 'sass', 'watch']);
};