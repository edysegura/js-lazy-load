'use strict'

var Index = {

  showContent: function (message) {
    if (typeof message === "string") {
      var p = document.createElement("p")
      p.textContent = message
      document.body.appendChild(p)
    }
  }

}
