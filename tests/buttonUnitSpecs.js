var testFrame;

describe("Button", function () {

  beforeEach(function(asyncDone){
    var frameOptions;
    if ( testFrame ) {
      asyncDone();
    }
    else {
      frameOptions = {
        width: 855,
        height: 530,
        src: "http://localhost:8888"
      };
      testFrame = quixote.createFrame(frameOptions, asyncDone);
    }
  });

  afterEach(function () {
    testFrame.reset();
  });

  it("has an inline structure", function () {
    var button, displayValue;
    button = testFrame.get("#plainBtn button");
    displayValue = button.getRawStyle("display");
    expect(displayValue).toMatch(/.?(inline-).?/);
  });

  it("has a block structure", function () {
    var button, displayValue;
    button = testFrame.get("#blockBtn button");
    displayValue = button.getRawStyle("display");
    expect(displayValue).toMatch(/.?(flex|block|box).?/);
  });

});
