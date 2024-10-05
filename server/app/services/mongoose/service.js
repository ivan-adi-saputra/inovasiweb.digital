const Service = require("../../api/v1/service/model");
const { BadRequestError, NotFoundError } = require("../../errors");

// Helper untuk pengecekan ID
const checkServiceExistence = async (id) => {
  const service = await Service.findById(id);
  if (!service)
    throw new NotFoundError(`Service tidak ditemukan dengan id: ${id}`);
  return service;
};

// Mengambil semua data service
const getAllService = async (req) => {
  const { name } = req.query;
  let condition = {};

  if (name) {
    condition = { name: { $regex: new RegExp(name, "i") } };
  }

  return await Service.find(condition);
};

// Mengambil data service berdasarkan ID
const getServiceById = async (req) => {
  const { id } = req.params;
  return checkServiceExistence(id);
};

// Membuat service baru
const createService = async (req) => {
  const { name, benefits, description, price, isRecomended } = req.body;

  if (await Service.exists({ name }))
    throw new BadRequestError("Nama service sudah ada");

  return await Service.create({
    name,
    benefits,
    description,
    price,
    isRecomended,
  });
};

// Mengupdate service berdasarkan ID
const updateService = async (req) => {
  const { name, benefits, description, price, isRecomended } = req.body;
  const { id } = req.params;

  if (await Service.exists({ name, _id: { $ne: id } }))
    throw new BadRequestError("Nama service sudah ada");

  const updatedService = await Service.findByIdAndUpdate(
    id,
    { name, benefits, description, price, isRecomended },
    { new: true }
  );
  if (!updatedService)
    throw new NotFoundError(`Service tidak ditemukan dengan id: ${id}`);

  return updatedService;
};

// Menghapus service berdasarkan ID
const deleteService = async (req) => {
  const { id } = req.params;

  const deletedService = await Service.findByIdAndDelete(id);
  if (!deletedService)
    throw new NotFoundError(`Service tidak ditemukan dengan id: ${id}`);

  return deletedService;
};

// Mengubah status isRecomended
const changeIsRecomended = async (req) => {
  const { id } = req.params;
  const { isRecomended } = req.body;

  const result = await Service.findByIdAndUpdate(
    id,
    { isRecomended },
    { new: true }
  );

  if (!result)
    throw new NotFoundError(`Service tidak ditemukan dengan id: ${id}`);

  return result;
};

module.exports = {
  getAllService,
  getServiceById,
  createService,
  updateService,
  deleteService,
  changeIsRecomended,
};
