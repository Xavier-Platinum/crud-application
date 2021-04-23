const { index, users } = require("../controllers/default.controller");

const router = require("express").Router();

/**
 * @param {GET}
 */
router.get("/", index);

/**
 * @param {GET}
 */
router.get("/users", users);

module.exports = router;