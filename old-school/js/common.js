var Common = {

  includeJS: function (jsFile) {
    if (!Common.checkExistScript(jsFile)) {
      var scriptTag = document.createElement('script');

      scriptTag.type = "text/javascript";
      scriptTag.src = jsFile; //+ "?" + (new Date()).getTime();

      document.body.appendChild(scriptTag);
    }
  },


  checkExistScript: function (jsFile) {
    var scriptTag = document.getElementsByTagName('script');
    var rePattern = new RegExp(jsFile, "g");

    for (var i = 0; i < scriptTag.length; i++) {
      if (rePattern.test(scriptTag[i].src)) {
        return true;
      }
    }

    return false;
  }

};

