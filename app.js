

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const jwt = require('jsonwebtoken');
console.log(jwt.sign({}, process.env.JWT_SECRET))

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(session({
  secret: 'clave_secreta',
  resave: false,
  saveUninitialized: true
}));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'));
 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/estudiantes', require('./routes/estudiantesRoutes'));

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));