const { StatusCodes } = require("http-status-codes");
const { handleResponse } = require("../../../helper/handle-response");
const { uploadImage } = require("../../../services/mongoose/image");

const create = async (req, res, next) => {
  try {
    const result = await uploadImage(req);

    handleResponse(
      res,
      StatusCodes.CREATED,
      "Upload image successfully",
      result
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
