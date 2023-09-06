const express = require("express");
const router = express.Router();
const validator = require("../../middlewares/validator")
const { postFieldValidator, postNonConstructibleChangeValidator } = require("../../validator/field-validator")
const { ControllerNonConstructibleChange } = require("../../controller")
const { ControllerSmallestDifference } = require("../../controller")


router.post(
    "/challenge/smallest-difference",
    postFieldValidator,
    validator,
    ControllerSmallestDifference.handler.bind(ControllerSmallestDifference)
)

router.post(
    "/challenge/non-constructible-change",
    postNonConstructibleChangeValidator,
    validator,
    ControllerNonConstructibleChange.handler.bind(ControllerNonConstructibleChange)
);

module.exports = router;