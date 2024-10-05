const express = require("express");
const {
  loginClient,
  registerClient,
  activationClient,
} = require("./controller");
const router = express();

router.post("/client/signin", loginClient);
router.post("/client/activate", activationClient);
router.post("/client/signup", registerClient);

module.exports = router;
