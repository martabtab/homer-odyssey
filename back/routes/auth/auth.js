const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", function (req, res) {
 var query = connection.query("INSERT INTO users SET ?", req.body, function (
   error,
   result
 ) {
   if (error) throw error;
   res.send({
    id: result.insertId,
    ...req.body
   })
 });
});


module.exports = router;
