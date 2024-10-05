const express = require("express");
const { index, find, create, update, destroy } = require("./controller");
const router = express();

router.get("/project", index);
router.get("/project/:id", find);
router.post("/project", create);
router.put("/project/:id", update);
router.delete("/project/:id", destroy);

module.exports = router;
