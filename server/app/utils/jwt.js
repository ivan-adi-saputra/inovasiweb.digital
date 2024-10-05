const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiration } = require("../config");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

const createTokenUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    email: user.email,
  };
};

module.exports = {
  createJWT,
  isTokenValid,
  createTokenUser,
};
