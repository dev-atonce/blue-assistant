const router = require("express").Router();
const auth = require("../auth");

router.use("/users", require("./user"));
router.use("/banner", auth.required, require("./banner"));

module.exports = router;
