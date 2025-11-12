const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');

 
router.post('/registro', [
  body('correo').isEmail().withMessage('Correo inválido').normalizeEmail().escape(),
  body('contraseña').isLength({ min: 3 }).withMessage('La contraseña debe tener al menos 6 caracteres')
],authController.registrar);

router.post('/login', authController.login);
 
module.exports = router;