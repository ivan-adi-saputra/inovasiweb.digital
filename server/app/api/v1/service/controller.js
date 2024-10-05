const { StatusCodes } = require("http-status-codes");
const {
  getAllService,
  getServiceById,
  createService,
  updateService,
  deleteService,
  changeIsRecomended,
} = require("../../../services/mongoose/service");
const { handleResponse } = require("../../../helper/handle-response");

const index = async (req, res, next) => {
  try {
    const result = await getAllService(req);

    handleResponse(res, StatusCodes.OK, "Get all service successfully", result);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getServiceById(req);

    handleResponse(res, StatusCodes.OK, "Get one service successfully", result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createService(req);

    handleResponse(
      res,
      StatusCodes.CREATED,
      "Create service successfully",
      result
    );
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateService(req);

    handleResponse(res, StatusCodes.OK, "Update service successfully", result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteService(req);

    handleResponse(res, StatusCodes.OK, "Delete service successfully", result);
  } catch (error) {
    next(error);
  }
};

const changeRecomended = async (req, res, next) => {
  try {
    const result = await changeIsRecomended(req);
    handleResponse(
      res,
      StatusCodes.OK,
      "Change Is Recomended service successfully",
      result
    );
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
  changeRecomended,
};
