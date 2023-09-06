const express = require('express');
const router = express.Router();
const { FrontController } = require("./../../controller");


router.get('/home', FrontController.homePage.bind(this));

router.post('/validate-fields', (req, res) => res.send('Fields validated'));

module.exports = router;
