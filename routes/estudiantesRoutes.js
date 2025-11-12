const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const auth = require('../middlewares/authMiddleware');
 
router.get('/', auth, estudiantesController.listar);
router.post('/', [
  body('nombre')
    .isString().withMessage('El nombre debe ser texto')
    .trim().escape()
    .matches(/^[a-zA-Z\s]+$/).withMessage('Solo letras y espacios'),
  body('carrera')
    .isString().withMessage('La carrera debe ser texto')
    .trim().escape(),
  body('edad')
    .isInt({ min: 0, max: 120 }).withMessage('Edad debe ser un número entre 0 y 120')
]
,auth, 
estudiantesController.crear);
 
module.exports = router;

