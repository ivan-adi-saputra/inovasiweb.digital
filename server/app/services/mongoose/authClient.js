const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../../errors");
const { createJWT, createTokenUser } = require("../../utils/jwt");
const Client = require("../../api/v1/client/model");
const { otpMail } = require("../mail");

const signinClient = async (req) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestError("Email & password harus diisi");

  const result = await Client.findOne({ email: email });

  if (!result) throw new UnauthorizedError("Email atau password salah");

  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect)
    throw new UnauthorizedError("Email atau password salah");

  const token = createJWT({ payload: createTokenUser(result) });

  return { token, email: result.email };
};

const activateClient = async (req) => {
  const { email, otp } = req.body;

  const check = await Client.findOne({ email });

  if (!check) throw new NotFoundError("Client belum terdaftar");

  if (check.otp !== otp) throw new BadRequestError("Kode OTP salah");

  const result = await Client.findByIdAndUpdate(
    check._id,
    { isActive: true },
    { new: true }
  );

  delete result._doc.password;

  return result;
};

const signupClient = async (req) => {
  const { name, email, password, phone, company, image } = req.body;

  let result = await Client.findOne({ email, isActive: false });

  const otp = Math.floor(Math.random() * 9999);

  if (result) {
    Object.assign(result, {
      name,
      email,
      password,
      phone,
      company,
      image,
      otp,
    });
  } else {
    result = new Client({ name, email, password, phone, company, image, otp });
  }

  await result.save();
  await otpMail(email, result);

  const { password: _, otp: __, ...clientData } = result._doc;

  return clientData;
};

module.exports = { signinClient, signupClient, activateClient };
