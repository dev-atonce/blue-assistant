const router = require("express").Router();
const controllers = require("../../controllers/banner.controller");
const validator = require("../../validators");

router.get("/", controllers.onGet);
router.get("/all", controllers.onGetAll);
router.get("/:id", [validator.banner.findById, validator.check], controllers.onGetById);
router.post("/", controllers.onInsert);
router.put("/:id", controllers.onUpdate);
router.delete("/:id", [validator.banner.deleteById, validator.check], controllers.onDelete);

module.exports = router;
