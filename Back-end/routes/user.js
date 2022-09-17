const {Router} = require("express");
const {register_post} = require("../controllers/user");

// server router
const router = Router();

// routes
router.post('/register', register_post);

module.exports = router;