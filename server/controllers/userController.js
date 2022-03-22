const ApiError = require('../error/Apierror');
const { User, Basket } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
     return jwt.sign(
         {id, email, role},
         process.env.SECRET_KEY,
         {expiresIn: '24h'}
     )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({ where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 4);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.badRequest('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Неправильный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async check(req, res, next) {
        const token = genearateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token})
    }
}

module.exports = new UserController();

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjQ3OTU3Mjc0LCJleHAiOjE2NDgwNDM2NzR9.VGShMHC57GJKGTy5mwfIQsIpa2w5B7hVrSCl3Fn4i1M