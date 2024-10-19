const { handleRequest } = require("../../../helper/handle-request");
const {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../../../services/mongoose/company");

const index = (req, res, next) =>
  handleRequest(req, res, next, getAllCompany, "Get all company successfully");

const find = (req, res, next) =>
  handleRequest(req, res, next, getOneCompany, "Get one company successfully");

const create = (req, res, next) =>
  handleRequest(req, res, next, createCompany, "Create company successfully");

const update = (req, res, next) =>
  handleRequest(req, res, next, updateCompany, "Update company successfully");

const destroy = (req, res, next) =>
  handleRequest(req, res, next, deleteCompany, "Delete company successfully");

module.exports = {
  index,
  find,
  create,
  update,
  destroy,
};
