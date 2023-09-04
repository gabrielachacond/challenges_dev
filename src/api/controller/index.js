const { ControllerNonConstructibleChange } = require("./non-constructible-change");
const {FrontController} = require("./front/front-controller");

module.exports = {
    ControllerNonConstructibleChange: new ControllerNonConstructibleChange(),
    FrontController: new FrontController()
}