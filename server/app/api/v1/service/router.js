const express = require("express");
const {
  index,
  find,
  create,
  update,
  destroy,
  changeRecomended,
} = require("./controller");
const router = express();

router.get("/service", index);
router.get("/service/:id", find);
router.post("/service", create);
router.put("/service/:id", update);
router.delete("/service/:id", destroy);
router.put("/service/:id/recommend", changeRecomended);

module.exports = router;
