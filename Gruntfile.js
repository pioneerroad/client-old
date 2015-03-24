module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "ui/css/main.css": "ui/css/less/main.less" // destination file and source file
        }
      }
    },
    watch: {
        html: {
            files: ['*.html','ui/css/*.css'],
            options: {
                livereload:true,
                nospawn: true
            }
        },
      styles: {
        files: ['ui/css/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
            livereload:true,
            nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
