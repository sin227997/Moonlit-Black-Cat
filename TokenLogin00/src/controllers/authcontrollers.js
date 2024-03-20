import bcrypt from('bcrypt');
import jwt from('jsonwebtoken');
import User from ('../models/User');

exports.register = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      const user = new User({
        email: req.body.email,
        password: hash,
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        placeOfBirth: req.body.placeOfBirth,
        nationality: req.body.nationality
      });
      user.save()
        .then(result => {
          res.status(201).json({ message: 'User created' });
        })
        .catch(err => {
          res.status(500).json({ error: err });
        });
    }
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Auth failed' });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Auth failed' });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id
            },
            'secret_key',
            { expiresIn: '1h' }
          );
          return res.status(200).json({ message: 'Xác Thực Thành Công', token: token });
        }
        res.status(401).json({ message: 'Xác Thực Thất Bại' });
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};
