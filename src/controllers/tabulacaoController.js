const Tabulacao = require('../models/Tabulacao')

exports.store = async (req, res) => {
  const { nomeCliente,
    protocolo,
    dataAtendimento,
    numeroBinado,
    numeroAcesso } = req.body

  try {
    const tabulacao = await Tabulacao.create({
      nomeCliente,
      protocolo,
      dataAtendimento,
      numeroBinado,
      numeroAcesso
    })
    return res.status(201).json(tabulacao)

  }
  catch (err) {
    return res.status(400).json({ error: 'esta tabulação não pôde ser criada' })
  }
}