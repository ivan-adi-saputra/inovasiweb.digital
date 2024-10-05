const Project = require("../../api/v1/project/model");
const { BadRequestError, NotFoundError } = require("../../errors");
const { checkingImage } = require("./image");
const { checkingService } = require("./service");

// Helper untuk pengecekan ID
const checkProjectExistence = async (id) => {
  const project = await Project.findById(id)
    .populate({
      path: "service",
      select: "_id name",
    })
    .populate({
      path: "image",
      select: "_id name",
    });
  if (!service)
    throw new NotFoundError(`Project tidak ditemukan dengan id: ${id}`);
  return project;
};

// Mengambil semua data project
const getAllProject = async (req) => {
  const { name, service, client } = req.query;
  let condition = {};

  if (name) {
    condition = { name: { $regex: new RegExp(name, "i") } };
  }

  if (service) {
    condition = {
      ...condition,
      service,
    };
  }

  // if(client) {
  //   condition = {
  //    ...condition,
  //     client
  //   };
  // }

  return await Project.find(condition)
    .populate({
      path: "service",
      select: "_id name",
    })
    .populate({
      path: "image",
      select: "_id name",
    });
};

// Mengambil data project berdasarkan ID
const getProjectById = async (req) => {
  const { id } = req.params;
  return checkProjectExistence(id);
};

// Membuat service baru
const createProject = async (req) => {
  const { service, client, date, name, image, features, description } =
    req.body;

  checkingService(service);
  // if(client) // checkclient
  checkingImage(image);

  if (await Project.exists({ name }))
    throw new BadRequestError("Nama project sudah ada");

  return await Project.create({
    service,
    client,
    date,
    name,
    image,
    features,
    description,
  });
};

// Mengupdate project berdasarkan ID
const updateProject = async (req) => {
  const { service, client, date, name, image, features, description } =
    req.body;
  const { id } = req.params;

  if (await Project.exists({ name, _id: { $ne: id } }))
    throw new BadRequestError("Nama project sudah ada");

  checkingService(service);
  // if(client) // checkclient
  checkingImage(image);

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { service, client, date, name, image, features, description },
    { new: true }
  );
  if (!updatedProject)
    throw new NotFoundError(`Project tidak ditemukan dengan id: ${id}`);

  return updatedProject;
};

// Menghapus project berdasarkan ID
const deleteProject = async (req) => {
  const { id } = req.params;

  const deletedProject = await Project.findByIdAndDelete(id);
  if (!deletedProject)
    throw new NotFoundError(`Project tidak ditemukan dengan id: ${id}`);

  return deletedProject;
};

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
