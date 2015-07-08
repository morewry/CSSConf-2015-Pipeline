exports.config = {

  // Framework to use. Jasmine 2 is recommended by Protractor
  framework: 'jasmine2',

  // Options to be passed to Jasmine
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },

  directConnect: false,

  seleniumServerJar: __dirname + "/../../node_modules/selenium-standalone/.selenium/selenium-server/2.45.0-server.jar",

  chromeDriver:  __dirname + "/../../node_modules/selenium-standalone/.selenium/chromedriver/2.15-x64-chromedriver",

  // Base Url for relative paths
  baseUrl: "http://localhost:8888",

  // Specs to run
  specs: [
     __dirname + "/../../tests/*E2ESpecs.js"
  ],

  // Capabilities to be passed to the webdriver instance
  multiCapabilities: [
    // {
    //   "browserName": "chrome"
    // }
    // ,
    {
      "browserName": "firefox"
    }
    // ,
    // {
    //   "browserName": "safari"
    // }
  ],

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }

};
