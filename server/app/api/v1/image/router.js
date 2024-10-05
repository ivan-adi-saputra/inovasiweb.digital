const express = require("express");
const { create } = require("./controller");
const uploadMiddleware = require("../../../middlewares/multer");
const router = express();

router.post("/image", uploadMiddleware.single("images"), create);

module.exports = router;
