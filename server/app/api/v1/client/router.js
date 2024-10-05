const express = require("express");
const { index, find, create, update, destroy } = require("./controller");
const router = express();

router.get("/client", index);
router.get("/client/:id", find);
router.post("/client", create);
router.put("/client/:id", update);
router.delete("/client/:id", destroy);

module.exports = router;
