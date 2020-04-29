const { Schema, model } = require('mongoose');

const Gravacao = Schema({
  telefone: {
    type: String,
    required: true
  },

  ramal: {
    type: String,
    required: true
  },

  dataGravacao: {
    type: Date,
    required: true
  },
  processado: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Gravacoes', Gravacao);