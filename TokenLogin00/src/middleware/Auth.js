import jwt from ('jsonwebtoken');

const checkAuth = (req, res, next) => {
  
  const token = req.headers.authorization.split(' ')[1];

  
  jwt.verify(token, 'secret_key', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Không Được Phép' });
    } else {
      req.userData = decodedToken;
      next();
    }
  });
};

exports default checkAuth;
