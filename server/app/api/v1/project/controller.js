const { StatusCodes } = require("http-status-codes");
const { handleResponse } = require("../../../helper/handle-response");
const {
  deleteProject,
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
} = require("../../../services/mongoose/project");

const index = async (req, res, next) => {
  try {
    const result = await getAllProject(req);

    handleResponse(res, StatusCodes.OK, "Get all project successfully", result);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getProjectById(req);

    handleResponse(res, StatusCodes.OK, "Get one project successfully", result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createProject(req);

    handleResponse(
      res,
      StatusCodes.CREATED,
      "Create project successfully",
      result
    );
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateProject(req);

    handleResponse(res, StatusCodes.OK, "Update project successfully", result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteProject(req);

    handleResponse(res, StatusCodes.OK, "Delete project successfully", result);
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
