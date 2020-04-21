// Dependencies
// =============================================================
var path = require("path");
const router = require("express").Router();


// Routes
// =============================================================

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    router.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

    router.get("/exercise", function(req, res) {
      console.log("Inside exersize route" + res);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
        
    module.exports = router;