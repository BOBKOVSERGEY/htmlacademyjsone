var bs = require("browser-sync").create();

bs.watch(['dom/*.*', 'dom/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./dom"
});