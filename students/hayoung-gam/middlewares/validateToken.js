import jwt from 'jsonwebtoken';
const { JWT_SECRET_KEY } = process.env;

const validateToken = (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ');

    if (token) {
      const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    } else {
      const err = new Error('TOKEN_REQUIRED.');
      err.statusCode = 401;
      throw err;
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default validateToken;
