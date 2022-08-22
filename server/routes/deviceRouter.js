const Router = require('express')
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRoles = require('../middleware/checkRole')


router.post('/',/*  checkRoles("ADMIN") , */deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router