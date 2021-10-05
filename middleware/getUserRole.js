const getUser = async (req, res, next) => {
  const { token } = req.body;
  if (token !== "admin") {
    res.status(401);
    return res.json("user not authorized");
  }

  next();
};

module.exports = { getUser };
