var bs = require("browser-sync").create();

bs.watch(['api/*.*', 'api/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./api"
});