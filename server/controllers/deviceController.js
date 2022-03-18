const {v4: uuidv4} = require('uuid')
const path = require('path')
const {Device} = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/Apierror');

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuidv4() + ".jpg";
            img.mv(__dirname, '..','static', fileName)

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController();