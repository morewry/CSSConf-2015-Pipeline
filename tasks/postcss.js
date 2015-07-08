module.exports = function (grunt) {
  grunt.config("postcss", {
    options: {
      processors: [
        require("autoprefixer-core")()
      ]
    },
    styles: {
      files: [{
        expand: true,
        cwd: "src/",
        src: ["*.css"],
        dest: "dist/"
      }]
    }
  });
};
