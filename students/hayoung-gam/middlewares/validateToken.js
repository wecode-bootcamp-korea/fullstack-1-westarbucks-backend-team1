import jwt from 'jsonwebtoken';
const { JWT_SECRET_KEY } = process.env;

const validateToken = (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ');
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    next();
  } catch (err) {
    next(err);
  }
};

export default validateToken;
