module.exports = function (grunt) {
  grunt.config("protractor", {
    options: {
      configFile: __dirname + "/config/protractor.js",
      keepAlive: true
    },
    styles: {}
  });
};
