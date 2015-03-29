module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  var pushState = require('connect-pushstate');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          optimization: 2
        },
        files: {
          "ui/css/main.css": "ui/css/less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      html: {
        files: ['*.html', 'ui/css/*.css'],
        options: {
          livereload: true,
          nospawn: true
        }
      },
      styles: {
        files: ['ui/css/less/**/*.less'], // which files to watch
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
          base: './',
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