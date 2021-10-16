const route = require('color-convert/route')
const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
//const upload = require('../middleware/upload')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
//router.post('/store', upload.single('avatar'), EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delte', EmployeeController.destroy)
router.post('/store', EmployeeController.store)

module.exports = router