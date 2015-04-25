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
    watch: {
      html: {
        files: ['app/index.html', 'app/views/**/*.html', 'app/assets/stylesheets/*.css'],
        options: {
          livereload: true,
          nospawn: true
        }
      },
      styles: {
        files: ['app/assets/less/**/*.less'], // which files to watch
        tasks: ['less'],
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
              connect.static(options.base[0])
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'less', 'watch']);
};
