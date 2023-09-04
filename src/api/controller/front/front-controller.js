class FrontController {
    constructor() {
    }

    homePage(req, res, next) {
        const config = { test: '', date: new Date().toISOString().split('T')[0] }
        res.render('partials/form.hbs', config);
    }
}

exports.FrontController = FrontController;
