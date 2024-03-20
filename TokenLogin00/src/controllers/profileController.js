import Profile from('../models/Profile');

exports.updateProfile = (req, res) => {
  const userId = req.params.userId;
  if (userId !== req.userData.userId) {
    return res.status(403).json({ message: 'Không Thể Thay Đổi Thông Tin' });
  }


  Profile.findOneAndUpdate({ userId: userId }, req.body, { new: true })
    .exec()
    .then(profile => {
      if (!profile) {
        return res.status(404).json({ message: 'Không Tìm Thấy Thông Tin' });
      }
      res.status(200).json(profile);
    })
}