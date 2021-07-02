/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
const TOKEN_KEY = '' + process.env.SECRET_KEY;

const authenticateToken = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    jwt.verify(token, TOKEN_KEY, (err) => {
      if (err) {
        res.status(401).json({ error: 'AUTH_ERROR' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'AUTH_ERROR_FROM_AUTHCHECKER' });
  }
};

export default authenticateToken;
