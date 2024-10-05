const { BadRequestError, UnauthorizedError } = require("../../errors");
const { createJWT, createTokenUser } = require("../../utils/jwt");
const User = require("../../api/v1/user/model");

const signinUser = async (req) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestError("Email & password harus diisi");

  const result = await User.findOne({ email: email });

  if (!result) throw new UnauthorizedError("Email atau password salah");

  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect)
    throw new UnauthorizedError("Email atau password salah");

  const token = createJWT({ payload: createTokenUser(result) });

  return { token, email: result.email };
};

const signupUser = async (req) => {
  const { email, password, name } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) throw new BadRequestError("Email sudah terdaftar");

  return await User.create({
    email,
    password,
    name,
  });
};

module.exports = { signinUser, signupUser };
