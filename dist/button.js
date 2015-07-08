// quick, messy, naive implementation of a UI component
// hacked together to avoid dependencies not part of the topic
// so, ignore the details; assume this stands in for the importable component
(function (window, document, undefined) {

  document.addEventListener("DOMContentLoaded", function () {
    var templateString, styleString, documentHead, customButtons, defaultAttributes;

    templateString = '<button class="custom-button custom-button__{{theme}} custom-button__{{layout}}" type="{{type}}" {{disabled}}><span class="custom-button--text">{{label}}</span></button>';
    styleString = '.custom-button{padding:0 1rem;max-width:100%;height:2rem;line-height:2rem;vertical-align:middle;box-sizing:border-box;cursor:pointer}.custom-button:disabled{color:#777;background:#BBB;pointer-events:none;box-shadow:none;opacity:.75;cursor:default}.custom-button__inline{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.custom-button__block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:1rem;box-shadow:1px 1px 1px 0 rgba(0,0,0,.15)}.custom-button__dark{border:0;color:#FFF;background:#333;text-transform:uppercase;text-align:center}.custom-button__dark:active,.custom-button__dark:focus,.custom-button__dark:hover{background:#555;outline:#555 solid .15rem}.custom-button--text{display:block;max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}';

    documentHead = document.getElementsByTagName("head").item(0) || document.documentElement;
    customButtons = Array.prototype.slice.call(document.querySelectorAll("custom-button"));

    defaultAttributes = {
      "type": "button",
      "theme": "dark",
      "layout": "inline"
    };

    if ( !document.getElementById("custom-button") ) {
      var buttonCallback;

      documentHead.innerHTML += ['<style id="custom-button">', styleString, '</style>'].join("");

      customButtons.forEach(buttonCallback = function (currentButton) {
        var parsedTemplate, currentAttributes, templateCallback;

        currentAttributes = Array.prototype.slice.call(currentButton.attributes);

        parsedTemplate = templateString.replace(/[{]{2}([^{}]+)[}]{2}/gi, templateCallback = function (match, templateKey) {
          var replacement = "", attrCallback;

          if ( templateKey === "label" ) {
            replacement = currentButton.innerHTML;
          }
          else {
            currentAttributes.forEach(attrCallback = function (currentAttr) {
              if ( templateKey === currentAttr.name ) {
                replacement = currentAttr.value;
              }
              else if ( defaultAttributes.hasOwnProperty(templateKey) ) {
                replacement = defaultAttributes[templateKey];
              }
            });
          }
          return replacement;
        });

        currentButton.innerHTML = parsedTemplate;

      });
    }

  });

}(window, document))
