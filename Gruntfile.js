var gruntStart = function(grunt) {

  // 1. load task plugins
  grunt.loadNpmTasks("grunt-contrib-connect");         // (u1) utility, server
  grunt.loadNpmTasks("grunt-contrib-watch");           // (u2) utility, watch
  grunt.loadNpmTasks("grunt-contrib-csslint");         // (b1) build, lint: csslint
  grunt.loadNpmTasks("grunt-postcss");                 // (b2) build, post process: autoprefixer
  grunt.loadNpmTasks("grunt-contrib-jasmine");         // (t1) test, unit: quixote
  grunt.loadNpmTasks("grunt-phantomcss-tr");           // (t2) test, visual: phantomcss
  grunt.loadNpmTasks("grunt-protractor-runner");       // (t3) test, e2e: protractor
  grunt.loadNpmTasks("grunt-release");                 // (d1) distribute, release:

  // 2. initalize grunt config
  grunt.initConfig({});

  // 3. config plugin tasks
  require(__dirname + "/tasks/connect.js")(grunt);     // (u1) utility, server
  require(__dirname + "/tasks/watch.js")(grunt);       // (u2) utility, watch
  require(__dirname + "/tasks/csslint.js")(grunt);     // (b1) build, lint: csslint
  require(__dirname + "/tasks/postcss.js")(grunt);     // (b2) build, post process: autoprefixer
  require(__dirname + "/tasks/jasmine.js")(grunt);     // (t1) test, unit: quixote
  require(__dirname + "/tasks/phantomcss.js")(grunt);  // (t2) test, visual: phantomcss
  require(__dirname + "/tasks/protractor.js")(grunt);  // (t3) test, e2e: protractor
  require(__dirname + "/tasks/release.js")(grunt);     // (d1) distribute, release: release

  // 4. config custom tasks
  grunt.registerTask("build", [                        // (p1) pipeline part 1: build
    "csslint:styles",                                  // (b1) build, lint: csslint
    "postcss:styles"                                   // (b2) build, post process: autoprefixer
  ]);

  grunt.registerTask("test", [                         // (p2) pipeline part 2: test
    "connect:devserver",                               // (u1) utility, server
    "test-only"                                        // (p3) pipeline alt test task
  ]);

  grunt.registerTask("test-only", [                    // (p3) pipeline alt test task
    "jasmine:quixote",                                 // (t1) test, unit: quixote
    "phantomcss:styles",                               // (t2) test, visual: phantomcss
    "protractor:styles"                                // (t3) test, e2e: protractor
  ]);

  grunt.registerTask("distribute", [                   // (p4) pipeline part 3: distribute
    "release:patch"                                    // (d1) distribute, release: release
  ]);

  grunt.registerTask("dev", [                          // (p5) pipeline variant for dev/wip
    "build",                                           // (p1) pipeline part 1: build
    "connect:devserver",                               // (u1) utility, server
    "watch"                                            // (u2) utility, watch
  ]);
};

module.exports = gruntStart
