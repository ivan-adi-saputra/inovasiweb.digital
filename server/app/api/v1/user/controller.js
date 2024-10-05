const User = require("./model");

const index = async (req, res, next) => {
  try {
    res.json("oke");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
};
