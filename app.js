const express = require('express');
const app = express();
const path = require('path');
const itemDisplayCreator = require('./static/js/item-display-creator.js');

// =============================================================================
// Helper Functions
// =============================================================================

function dateNowReadable() {
  let myDate = new Date;
  return myDate.toLocaleString('en-US');
}


// =============================================================================
// app Initialization
// =============================================================================

// Sets view (template) engine to pug
// Modifies the setting of the object `app`
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "static")));

// =============================================================================
// Page Serving
// =============================================================================

app.get('/', (req, res) => {
  var data = require('./dataComplete.json');
  itemDisplayCreator.buildTags(data);
  app.locals.mainData = data;
  res.render('sandbox1');
});



// =============================================================================
// App Startup
// =============================================================================

const server = app.listen(3000, () => {
  console.log(`[${dateNowReadable()}] Now running on *:3000`);
});
