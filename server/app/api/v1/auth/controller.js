const { StatusCodes } = require("http-status-codes");
const { handleResponse } = require("../../../helper/handle-response");
const { signinUser, signupUser } = require("../../../services/mongoose/auth");

const signin = async (req, res, next) => {
  try {
    const result = await signinUser(req);

    handleResponse(res, StatusCodes.OK, "SignIn successfully", result);
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    const result = await signupUser(req);

    handleResponse(res, StatusCodes.OK, "SignUp successfully", result);
  } catch (error) {
    next(error);
  }
};

module.exports = { signin, signup };
