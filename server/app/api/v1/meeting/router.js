const express = require("express");
const { index, find, create, update, destroy } = require("./controller");
const router = express();

router.get("/meeting", index);
router.get("/meeting/:id", find);
router.post("/meeting", create);
router.put("/meeting/:id", update);
router.delete("/meeting/:id", destroy);

module.exports = router;
