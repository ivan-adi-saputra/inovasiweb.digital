const handleResponse = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    message,
    status: statusCode,
    data,
  });
};

module.exports = { handleResponse };
