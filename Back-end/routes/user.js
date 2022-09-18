const {Router} = require("express");
const {registerPost, loginPost} = require("../controllers/user");

// server router
const router = Router();

// routes
router.post('/register', registerPost);
router.post('/login', loginPost)

module.exports = router;