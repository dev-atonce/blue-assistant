const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/formcontact", require("./formcontact"));
router.use("/blog", require("./blog"));
router.use("/seo", require("./seo"));

module.exports = router;
