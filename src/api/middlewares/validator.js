const {validationResult} = require("express-validator");
const BadRequest = require("../response/errors/bad-request")

/**
 * 
 * @param {*} req is the original petition
 * @param {*} res is the answer to that request
 * @param {*} next in case you do continue 
 * @returns 
 */
const validator = (req, res, next)=>{

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let error = {};
		errors.array().map((err) => (error[err.param] = err.msg));

		let response = new BadRequest();
		response.setDetails(error);

		response = response.getResponse();

		return res.status(response.statusCode).set(response.headers).json(response.body);
	}

	next();

	
};


module.exports = validator;