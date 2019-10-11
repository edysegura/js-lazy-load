'use strict'

var Content1 = {

  showContent: function () {
    Index.showContent('Script "content-1.js" incluído.');
  }

};

Event.addHandle(window, 'load', Content1.showContent);