'use strict'

var Index = {

  showContent: function (sMessage) {
    if (typeof sMessage == "string") {
      var oParagrafo = document.createElement("p");
      oParagrafo.innerHTML = sMessage;
      document.body.appendChild(oParagrafo);
    }
  }

};
