module.exports = function (grunt) {
  grunt.config("csslint", {
    options: {
      csslintrc: ".csslintrc"
    },
    styles: {
      src: ["**/src/*.css"]
    }
  });
};
