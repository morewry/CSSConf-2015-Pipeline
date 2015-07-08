module.exports = function (grunt) {
  grunt.config("release", {
    options: {
      additionalFiles: ["bower.json"]
      // the next lines make this a fake version
      // to see a better dry-run, remove and run:
      // grunt release:minor --no-write
      , bump: false,
      add: false,
      commit: false,
      tag: false,
      push: false,
      pushTags: false,
      npm: false
    }
  });
};
