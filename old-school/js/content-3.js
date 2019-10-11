'use strict'

var Content3 = {

  showContent: function () {
    Index.showContent('Script "content-3.js" incluído.');
  }

};

Event.addHandle(window, 'load', Content3.showContent);