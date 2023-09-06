class BadRequest {
	constructor() {
		this.__code = 400;
		this.__message = "The request performed is not supported.";
		this.__error_code = "invalid_request";
		this.__details = "";
	}

	getResponse() {

		return {
			statusCode: this.__code,
			headers: { "Access-Control-Allow-Origin": "*" },
			body: { message: this.__message, error_code: this.__error_code, details: this.__details },
		};
	}

	setDetails(details) {
		this.__details = details;
	}
}

module.exports = BadRequest;
