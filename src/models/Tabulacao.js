const { Schema, model } = require('mongoose');

const Tabulacao = new Schema({
  nomeCliente: {
    type: String,
    required: true
  },

  protocolo: {
    type: String,
    required: true
  },

  dataAtendimento: {
    type: Date,
    required: true
  },
  numeroBinado: {
    type: String,
    required: true
  },

  numeroAcesso: {
    type: String,
    required: true
  },
  processado: {
    type: Boolean,
    default: false
  }
});

module.exports = model('tabulacoes', Tabulacao);