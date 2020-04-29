const express = require('express')
const router = express.Router()

const gravacaoController = require('./controllers/gravacaoController')
const tabulacaoController = require('./controllers/tabulacaoController')

router.post('/gravacao', gravacaoController.store)

router.post('/tabulacao', tabulacaoController.store)

module.exports = router