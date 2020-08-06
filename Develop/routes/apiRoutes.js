var noteDb = require("db/db.json");

module.exports = function (app) {

    // Should read the`db.json` file
    // return all saved notes as JSON
    app.get("/api/notes", function (req, res) {
        res.json(noteDb);
    });

    // Should receive a new note to save on the request body
    // add it to the`db.json` file
    // then return the new note to the client
    app.post("/api/notes", function (req, res) {

    });

    // Should receive a query parameter containing the id of a note to delete
    // This means you'll need to find a way to give each note a unique `id` when it's saved
    // In order to delete a note, you'll need to read all notes from the `db.json` file
    // remove the note with the given `id` property
    // then rewrite the notes to the `db.json` file
    app.delete("/api/notes/:id", function (req, res) {

    });