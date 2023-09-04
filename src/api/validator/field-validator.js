const { body } = require("express-validator");


module.exports = {
    postFieldValidator: [
        // TO DO: verif this validations
        body("array_one")
            .notEmpty()
            .withMessage("the field array_one is required")
            .bail()
            .isArray()
            .withMessage("the field array_one must be an Array")
            .bail()
            .custom((array) => {
                if (array.Length > 0) {
                    const regExp = new RegExp("^[0-9]*$")
                    array.every((item) => {
                        regExp.test(item)
                    })
                } else {
                    return true;
                }
            })
            .withMessage("The array must contain only integers")
            .bail()
        ,
        body("array_two")
            .notEmpty()
            .withMessage("the field array_two is required")
            .bail()
            .isArray()
            .withMessage("the field array_two must be an Array")
            .bail()
            .custom((array) => {
                if (array.Length > 0) {
                    const regExp = new RegExp("^[0-9]*$")
                    array.every((item) => {
                        regExp.test(item)
                    })
                } else {
                    return true;
                }
            })
            .withMessage("The array must contain only integers")
            .bail(),
    ],

    postNonConstructibleChangeValidator: [
        body("coins")
            .notEmpty()
            .withMessage("the field coins is required")
            .bail()
            .isArray()
            .withMessage("the field  coins must be an Array")
            .bail()
            .custom((array) => {
                if (array.Length > 0) {
                    const regExp = new RegExp("^[0-9]*$")
                    // TO DO: verif this validation
                    array.every((item) => {
                        regExp.test(item)
                    })
                } else {
                    return true
                }
            })
            .withMessage("The array must contain only integers")
            .bail()
    ]

}