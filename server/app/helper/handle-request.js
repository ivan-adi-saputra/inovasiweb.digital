const { StatusCodes } = require("http-status-codes");
const { handleResponse } = require("./handle-response");

// Helper untuk menangani request
const handleRequest = async (
  req,
  res,
  next,
  serviceMethod,
  successMessage,
  statusCode = StatusCodes.OK
) => {
  try {
    const result = await serviceMethod(req);

    handleResponse(res, statusCode, successMessage, result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleRequest,
};
