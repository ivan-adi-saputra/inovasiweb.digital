const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message ||
      "Terjadi kesalahan pada sistem kami. Silakan coba lagi nanti.",
  };
  // error validation dari mongoose
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Nilai duplikat dimasukkan untuk ${Object.keys(
      err.keyValue
    )}, Mohon periksa kembali data yang Anda masukkan.`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `Tidak ada item yang ditemukan dengan id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
