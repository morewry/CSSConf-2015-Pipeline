module.exports = function (grunt) {
  grunt.config("watch", {
    options: {
      reload: true
    },
    source: {
      files: ["src/*"],
      tasks: ["build"]
    },
    tests: {
      files: ["tests/*.js"],
      tasks: ["test-only"]
    }
  });
};
