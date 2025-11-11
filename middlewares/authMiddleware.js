const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  console.log(token, process.env.JWT_SECRET)
  if (!token) return res.status(403).send('Token requerido');
  try {
    const verificado = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = verificado;
    next();
  } catch (err) {
    res.status(401).send('Token inválido');
  }
};