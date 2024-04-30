const router = require('express').Router()
const controller =  require('../controllers/usercontroller')

router.get('/', controller.all)

router.get('/:id', controller.get)

router.post('/', controller.store)

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy)

module.exports = router