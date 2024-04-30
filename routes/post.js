const router = require('express').Router()

const controller = require('../controllers/postcontroller')

router.get('/', controller.all)
router.post('/', controller.post)
router.get('/:id', controller.get)

module.exports = router