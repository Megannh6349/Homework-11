const express = require('express');
const app = express();

// Declare port
const PORT = process.env.PORT || 4001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Create routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Invoke app's listen method on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});