var bs = require("browser-sync").create();

bs.watch(['event/*.*', 'event/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./event"
});