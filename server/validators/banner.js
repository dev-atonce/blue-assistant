const { param, body } = require("express-validator");

module.exports = {
    findById: [param("id").notEmpty().withMessage("is empty")],
    create: [
        body("name").notEmpty().withMessage("is empty"),
        body("email").notEmpty().withMessage("is empty"),
        body("password").notEmpty().withMessage("is empty"),
    ],
    update: [
        param("id").notEmpty().withMessage("is empty"),
        body("name").notEmpty().withMessage("is empty"),
        body("email").notEmpty().withMessage("is empty"),
        body("password").notEmpty().withMessage("is empty"),
    ],
    deleteById: [param("id").notEmpty().withMessage("is empty")],
};
