const Gravacao = require('../models/Gravacao')

exports.store = async (req, res) => {
  const { telefone, ramal, dataGravacao } = req.body

  try {
    const gravacao = await Gravacao.create({ telefone, ramal, dataGravacao })
    return res.status(201).json(gravacao)
  }
  catch (err) {
    return res.status(400).json({ error: 'esta gravacao não pôde ser criada' })
  }
}