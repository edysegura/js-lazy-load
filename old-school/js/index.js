'use strict'

var Index = {

  showContent: function (message) {
    if (typeof message == "string") {
      var paragraph = document.createElement("p");
      paragraph.textContent = message;
      document.body.appendChild(paragraph);
    }
  }

};
