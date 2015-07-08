module.exports = function (grunt) {
  grunt.config("connect", {
    options: {
      port: 8888,
      hostname: "*"
    },
    devserver: {}
  });
};
