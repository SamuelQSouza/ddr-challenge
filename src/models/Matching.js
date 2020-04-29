const { Schema, model } = require('mongoose');

const Matching = Schema({

  gravacaoId: {
    type: Schema.Types.ObjectId,
    ref: "gravacoes",
    required: true
  },
  tabulacaoId: {
    type: Schema.Types.ObjectId,
    ref: "tabulacoes",
    required: true
  },
});

module.exports = model('matchings', Matching);