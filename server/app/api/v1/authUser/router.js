const express = require("express");
const { signin, signup } = require("./controller");
const router = express();

router.post("/user/signin", signin);
router.post("/user/signup", signup);

module.exports = router;
