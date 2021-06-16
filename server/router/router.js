const router = require("express").Router();
const { getAllUsers, createUser } = require("../controller/user");

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
