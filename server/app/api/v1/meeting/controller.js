const { StatusCodes } = require("http-status-codes");
const { handleResponse } = require("../../../helper/handle-response");
const {
  deleteMeeting,
  getAllMeeting,
  getMeetingById,
  createMeeting,
  updateMeeting,
} = require("../../../services/mongoose/meeting");

const index = async (req, res, next) => {
  try {
    const result = await getAllMeeting(req);

    handleResponse(res, StatusCodes.OK, "Get all meeting successfully", result);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getMeetingById(req);

    handleResponse(res, StatusCodes.OK, "Get one meeting successfully", result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createMeeting(req);

    handleResponse(
      res,
      StatusCodes.CREATED,
      "Create meeting successfully",
      result
    );
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateMeeting(req);

    handleResponse(res, StatusCodes.OK, "Update meeting successfully", result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteMeeting(req);

    handleResponse(res, StatusCodes.OK, "Delete meeting successfully", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  find,
  create,
  update,
  destroy,
};
