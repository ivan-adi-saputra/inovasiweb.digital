const Company = require("../../api/v1/company/model");
const { NotFoundError, BadRequestError } = require("../../errors");
const { checkingImage } = require("./image");

// menambil semua company
const getAllCompany = async (req) => {
  return await Company.find();
};

// mengambil berdasarkan id
const getOneCompany = async (req) => {
  const { id } = req.params;
  return await checkingCompany(id);
};

// membuat company baru
const createCompany = async (req) => {
  const { name, image, description } = req.body;

  //   mengecek image berdasarkan Id
  await checkingImage(image);

  //   mengecek company berdasarkan name
  const check = await Company.findOne({ name });
  if (check) throw new BadRequestError(`Perusahaan ${name} sudah ada`);

  return await Company.create({
    name,
    image,
    description,
  });
};

// update company
const updateCompany = async (req) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  //   mengecek image berdasarkan Id
  await checkingImage(image);

  //   mengecek nama company selain this id
  const check = await Company.findOne({ name, _id: { $ne: id } });
  if (check) throw new BadRequestError(`Perusahaan ${name} sudah ada`);

  //   mengecek company berdasarkan id
  await checkingCompany(id);

  return await Company.findByIdAndUpdate(
    id,
    { name, image, description },
    { new: true }
  );
};

// delete company
const deleteCompany = async (req) => {
  const { id } = req.params;
  const company = await Company.findByIdAndDelete(id);
  if (!company)
    throw new NotFoundError(`Perusahaan tidak ditemukan dengan id: ${id}`);
  return company;
};

// chceking company byId
const checkingCompany = async (id) => {
  const result = await Company.findById(id);
  if (!result)
    throw new NotFoundError(`Perusahaan tidak ditemukan dengan id: ${id}`);

  return result;
};

module.exports = {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  checkingCompany,
};
