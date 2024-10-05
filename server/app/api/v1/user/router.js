const express = require("express");
const router = express();
const { index } = require("./controller");

router.get("/user", index);

module.exports = router;
