const verifyAdminRole = (req, res, next) => {
  const { role } = req.userdata;
  if (role !== 'Admin') return res.status(403).json({ message: 'Forbidden' });
  next();
};

module.exports = {
  verifyAdminRole,
};
