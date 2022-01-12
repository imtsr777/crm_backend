const router = require('express').Router()
const controller = require('../controller/students.js')

router.get('/',controller.GET)
router.get('/:userId',controller.GET)

module.exports = router
