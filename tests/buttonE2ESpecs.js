describe("Button", function () {

  beforeEach(function () {
    browser.get("http://localhost:8888");
  });

  it("should be clickable", function () {
    var plainBtn, outputArea;
    plainBtn = element(by.css('#plainBtn button'));
    outputArea = element(by.css('#test-output'));
    plainBtn.click();
    plainBtn.click();
    plainBtn.click();
    expect(outputArea.getText()).toEqual("Button clicked 3 times");
  });

  it("should not be clickable when disabled", function () {
    var plainBtn, disabledBtn, outputArea;
    plainBtn = element(by.css('#plainBtn button'));
    disabledBtn = element(by.css('#disabledBtn button'));
    outputArea = element(by.css('#test-output'));
    plainBtn.click();
    disabledBtn.click();
    disabledBtn.click();
    expect(outputArea.getText()).toEqual("Button clicked 1 times");
  });

});
