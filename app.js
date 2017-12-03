const express = require('express');
const app = express();
const path = require('path');

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
  const data = require('./dataComplete.json');
  app.locals.mainData = data;
  app.locals.myArray = ['a', 'b'];
  res.render('sandbox1');
})



// =============================================================================
// App Startup
// =============================================================================

const server = app.listen(3000, () => {
  console.log(`[${dateNowReadable()}] Now running on *:3000`);
});