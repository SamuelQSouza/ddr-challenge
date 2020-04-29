const Gravacao = require('../models/Gravacao')
const Tabulacao = require('../models/Tabulacao')
const Matching = require('../models/Matching')

exports.match = async () => {
  try {
    await index()
  } catch (error) { }
}


const index = async () => {
  try {
    console.log("rodou!");

    const tabulacoes = await Tabulacao.find({ processado: { $eq: false } })
    if (tabulacoes) {
      tabulacoes.map(async (tabulacao) => {
        const gravacao = await Gravacao.findOne({
          $and: [
            { processado: { $eq: false } },
            {
              $or: [
                { telefone: { $eq: tabulacao.numeroBinado } },
                { telefone: { $eq: tabulacao.numeroAcesso } }
              ]
            }
          ]
        })

        if (gravacao) {


          tabulacao.processado = true
          gravacao.processado = true
          await Promise.all(
            Matching.create({
              gravacaoId: gravacao._id,
              tabulacaoId: tabulacao._id
            }),
            tabulacao.save(),
            gravacao.save()
          )
        }
      })
    }
  } catch (error) {
    console.log('erro');

  }

}