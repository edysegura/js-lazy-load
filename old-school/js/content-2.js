'use strict'

var Content2 = {

  showContent: function () {
    Index.showContent('Script "content-2.js" incluído.');
  }

};

Event.addHandle(window, 'load', Content2.showContent);