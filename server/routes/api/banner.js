const router = require("express").Router();
const controllers = require("../../controllers/banner.controller");
const validator = require("../../validators");

router.get("/", controllers.onGetAll);
router.get("/:id", [validator.banner.findById, validator.check], controllers.onGetById);
router.post("/", [validator.banner.create, validator.check], controllers.onInsert);
router.put("/:id", [validator.banner.update, validator.check], controllers.onUpdate);
router.delete("/:id", [validator.banner.deleteById, validator.check], controllers.onDelete);

module.exports = router;
