casper.start("http://localhost:8888")
.then(function () {
  phantomcss.screenshot('[data-qa="type-plain"]', "Button With Type Plain");
  phantomcss.screenshot('[data-qa="type-long"]', "Button With Type Long Text");
  phantomcss.screenshot('[data-qa="type-icon"]', "Button With Type With Icon");
  phantomcss.screenshot('[data-qa="block-plain"]', "Button Block Variant Plain");
  phantomcss.screenshot('[data-qa="block-long"]', "Button Block Variant Long Text");
  phantomcss.screenshot('[data-qa="block-icon"]', "Button Block Variant With Icon");
  phantomcss.screenshot('[data-qa="disabled-plain"]', "Button Disabled Plain");
  phantomcss.screenshot('[data-qa="disabled-long"]', "Button Disabled Long Text");
  phantomcss.screenshot('[data-qa="disabled-icon"]', "Button Disabled With Icon");
})
.then(function () {
  this.mouse.move('[data-qa="type-plain"]');
})
.then(function () {
  this.mouse.down('[data-qa="type-plain"]');
});

casper.on("mouse.move", function () {
  phantomcss.screenshot('[data-qa="type-plain"]', "Button On Hover");
});

casper.on("mouse.down", function () {
  phantomcss.screenshot('[data-qa="type-plain"]', "Button On Active");
});
