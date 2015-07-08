module.exports = function (grunt) {
  grunt.config("phantomcss", {
    options: {},
    styles: {
      options: {
        screenshots: "tests/results/baselines/",
        results: "tests/results/screenshots/",
        viewportSize: [1280, 720]
      },
      src: ["tests/*VisualSpecs.js"]
    }
  });
};
