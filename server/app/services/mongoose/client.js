const Client = require("../../api/v1/client/model");
const { BadRequestError, NotFoundError } = require("../../errors");

// Helper untuk pengecekan ID
const checkClientExistence = async (id) => {
  const client = await Client.findById(id).populate({
    path: "image",
    select: "_id name",
  });
  if (!client)
    throw new NotFoundError(`Client tidak ditemukan dengan id: ${id}`);
  return client;
};

// Mengambil semua data client
const getAllClient = async (req) => {
  const { name } = req.query;
  let condition = {};

  if (name) {
    condition = { name: { $regex: new RegExp(name, "i") } };
  }

  return await Client.find(condition).populate({
    path: "image",
    select: "_id name",
  });
};

// Mengambil data client berdasarkan ID
const getClientById = async (req) => {
  const { id } = req.params;
  return checkClientExistence(id);
};

// Membuat client baru
const createClient = async (req) => {
  const { name, email, password, phone, company, image } = req.body;

  if (await Client.exists({ email }))
    throw new BadRequestError("Email client sudah ada");

  return await Client.create({
    name,
    email,
    password,
    phone,
    company,
    image,
  });
};

// Mengupdate client berdasarkan ID
const updateClient = async (req) => {
  const { name, email, password, phone, company, image } = req.body;
  const { id } = req.params;

  if (await Client.exists({ email, _id: { $ne: id } }))
    throw new BadRequestError("Email client sudah ada");

  const updatedClient = await Client.findByIdAndUpdate(
    id,
    { name, email, password, phone, company, image },
    { new: true }
  );
  if (!updatedClient)
    throw new NotFoundError(`Client tidak ditemukan dengan id: ${id}`);

  return updatedClient;
};

// Menghapus client berdasarkan ID
const deleteClient = async (req) => {
  const { id } = req.params;

  const deletedClient = await Client.findByIdAndDelete(id);
  if (!deletedClient)
    throw new NotFoundError(`Client tidak ditemukan dengan id: ${id}`);

  return deletedClient;
};

const checkingClient = checkClientExistence;

module.exports = {
  getAllClient,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  checkingClient,
};
