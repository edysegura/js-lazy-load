'use strict'

Common.loadFile("js/event.js");
Common.loadFile("js/index.js");
Common.loadFile("js/content-1.js");
Common.loadFile("js/content-2.js");
Common.loadFile("js/content-3.js");

// just a simple test to not load the file again
Common.loadFile("js/content-1.js");
Common.loadFile("js/content-2.js");
Common.loadFile("js/content-3.js");
