const Router = require('express')
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRoles = require('../middleware/checkRole')


router.post('/', checkRoles("ADMIN") ,brandController.create)
router.get('/', brandController.getAll)

module.exports = router