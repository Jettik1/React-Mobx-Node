const ApiError = require('../error/Apierror')
class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не задан ID')) // перед ошибкой return чтобы код дальше не выполнялся
        }
        res.json(id)
    }
}

module.exports = new UserController();