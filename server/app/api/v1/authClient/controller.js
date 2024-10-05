const { StatusCodes } = require("http-status-codes");
const { handleRequest } = require("../../../helper/handle-request");
const {
  signupClient,
  activateClient,
  signinClient,
} = require("../../../services/mongoose/authClient");

const registerClient = (req, res, next) =>
  handleRequest(
    req,
    res,
    next,
    signupClient,
    "SignUp client successfully",
    StatusCodes.CREATED
  );

const activationClient = (req, res, next) =>
  handleRequest(
    req,
    res,
    next,
    activateClient,
    "Activate client successfully",
    StatusCodes.CREATED
  );

const loginClient = (req, res, next) =>
  handleRequest(req, res, next, signinClient, "SignIn client successfully");

module.exports = { registerClient, activationClient, loginClient };
