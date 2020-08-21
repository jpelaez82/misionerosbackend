const db = require('../mongoConnection');
const timestamps = require('mongoose-timestamp');

// Visita Misionera Schema
const visitSchema = db.Schema({
    Nombre: { type: String, required: true },
    Email: { type: String, required: true },
    Celular: { type: Number, required: true },
    Plataforma: { type: String, required: true }
});

visitSchema.plugin(timestamps);
module.exports = db.model('Visit', visitSchema);