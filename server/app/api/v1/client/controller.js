const { StatusCodes } = require("http-status-codes");
const {
  getAllClient,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require("../../../services/mongoose/client");
const { handleRequest } = require("../../../helper/handle-request");

const index = (req, res, next) =>
  handleRequest(req, res, next, getAllClient, "Get all client successfully");

const find = (req, res, next) =>
  handleRequest(req, res, next, getClientById, "Get one client successfully");

const create = (req, res, next) =>
  handleRequest(
    req,
    res,
    next,
    createClient,
    "Create client successfully",
    StatusCodes.CREATED
  );

const update = (req, res, next) =>
  handleRequest(req, res, next, updateClient, "Update client successfully");

const destroy = (req, res, next) =>
  handleRequest(req, res, next, deleteClient, "Delete client successfully");

module.exports = {
  index,
  find,
  create,
  update,
  destroy,
};
