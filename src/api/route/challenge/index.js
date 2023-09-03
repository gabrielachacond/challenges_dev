const express = require("express");
const router = express.Router();
const validator = require("../../middlewares/validator")
const {postFieldValidator} = require("../../validator/field-validator")


router.post(
   "/challenge/smallest-difference",
   //postFieldValidator,
   //validator,
   (req, res) => {
    res.send('prueba challenge smallest-difference')
  });

  router.post(
    "/challenge/non-constructible-change",
    //postFieldValidator,
    //validator,
    (req, res) => {
     res.send('prueba challenge non-constructible-change')
   });
  
module.exports = router;