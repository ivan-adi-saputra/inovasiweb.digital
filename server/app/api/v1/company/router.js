const express = require("express");
const { index, find, create, update, destroy } = require("./controller");
const router = express();

router.get("/company", index);
router.get("/company/:id", find);
router.post("/company", create);
router.put("/company/:id", update);
router.delete("/company/:id", destroy);

module.exports = router;
