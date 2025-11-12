const Estudiante = require('../models/Estudiante');
const { validationResult } = require('express-validator');

 
exports.listar = async (req, res) => {
  const lista = await Estudiante.find();
  res.json(lista);
};
 
exports.crear = async (req, res) => {

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const estudiante = new Estudiante(req.body);
    await estudiante.save();
    res.status(201).json(estudiante);
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el estudiante' });
  }

};