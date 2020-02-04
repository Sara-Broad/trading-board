const router = require("express").Router();
const authRoutes = require('./auth-routes');

router.use("/login", authRoutes);

module.exports = router;