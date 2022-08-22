const uuid = require("uuid");
const path = require("path");
const { Device, DeviceImage } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, description, img } = req.body;
      // const { img } = req.files;
      // let hexString = uuid.v4(); // генерируем строку
      // hexString = hexString.replace(/-/g, ""); // убираем лишние(декоративные) знаки
      // let base64String = Buffer.from(hexString, "hex").toString("base64"); // получаем рандомную строку из рандомной hex-строки
      // let fileName = `${name}_${brandId}_${typeId}_${base64String}.jpg`; // Создаем имя файла
      // img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        description,
      });

      if (img) {
        img = JSON.parse(img);
        img.forEach((i) =>
          DeviceImage.create({
            // не ставим await чтобы не ждать возвращения промиса
            name: `${uuid.v4()}_${i.name}_${device.name}`,
            deviceId: device.id, // чтобы получить id device должен быть создан до этого момента
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ 
        limit,
        offset
      });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceImage, as: "img" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
