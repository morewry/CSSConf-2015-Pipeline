module.exports = function (grunt) {
  grunt.config("jasmine", {
    quixote: {
      options: {
        host: "http://localhost:8888",
        specs: ["**/tests/*UnitSpecs.js"],
        helpers: [__dirname + "/../node_modules/quixote/dist/quixote.js"]
      }
    }
  });
};
