import jwt from 'jsonwebtoken';
const { JWT_SECRET_KEY } = process.env;

const validateToken = (req, res, next) => {
  try {
    let token = '';
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else {
      const err = new Error('TOKEN_REQUIRED.');
      err.statusCode = 401;
      throw err;
    }

    jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
      req.decoded = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

export default validateToken;
