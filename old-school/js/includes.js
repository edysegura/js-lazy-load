'use strict'

LazyLoader.loadFile("js/event.js");
LazyLoader.loadFile("js/index.js");
LazyLoader.loadFile("js/content-1.js");
LazyLoader.loadFile("js/content-2.js");
LazyLoader.loadFile("js/content-3.js");

// just a simple test to check if
// the script not load the file again
LazyLoader.loadFile("js/content-1.js");
LazyLoader.loadFile("js/content-2.js");
LazyLoader.loadFile("js/content-3.js");
