'use strict'

function loadOtherDependencies() {
  LazyLoader.loadFile("js/content-1.js")
  LazyLoader.loadFile("js/content-2.js")
  LazyLoader.loadFile("js/content-3.js")
}

LazyLoader.loadFile("js/index.js", loadOtherDependencies)

// just a simple test to check if
// the script isn't loaded twice
LazyLoader.loadFile("js/content-1.js")
LazyLoader.loadFile("js/content-2.js")
LazyLoader.loadFile("js/no-exist.js")
