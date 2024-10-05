const notFound = (req, res) =>
  res.status(404).send({ msg: "Route tidak ditemukan" });

module.exports = notFound;
