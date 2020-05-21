'use strict'

var LazyLoader = {

  loadFile: function (jsFile, callback) {
    if (!LazyLoader.isFileLoaded(jsFile)) {
      var scriptTag = document.createElement('script')

      scriptTag.type = "text/javascript"
      scriptTag.src = jsFile //+ "?" + (new Date()).getTime()

      scriptTag.onload = function () {
        console.info('Script ' + jsFile + ' loaded!')
        callback && callback('success')
      }

      scriptTag.onerror = function () {
        console.error('This file could not be loaded: ' + jsFile)
        callback && callback('error')
      }

      document.body.appendChild(scriptTag)
    }
  },


  isFileLoaded: function (jsFile) {
    var scriptTag = document.getElementsByTagName('script')
    var rePattern = new RegExp(jsFile, "g")

    for (var i = 0; i < scriptTag.length; i++) {
      if (rePattern.test(scriptTag[i].src)) {
        return true
      }
    }

    return false
  }

}

