const { ControllerNonConstructibleChange } = require("./non-constructible-change");
const {FrontController} = require("./front/front-controller");
const { ControllerSmallestDifference } = require("./smallest-difference");

module.exports = {
    ControllerNonConstructibleChange: new ControllerNonConstructibleChange(),
    FrontController: new FrontController(),
    ControllerSmallestDifference: new ControllerSmallestDifference(),
}