const Image = require("../../api/v1/image/model");
const { NotFoundError } = require("../../errors");

const uploadImage = async (req) => {
  return await Image.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/default/thumbnail.jpeg",
  });
};

const checkingImage = async (id) => {
  const result = await Image.findOne({ id });
  if (!result)
    throw new NotFoundError(`Image tidak ditemukan dengan id: ${id}`);

  return result;
};

module.exports = { uploadImage, checkingImage };
